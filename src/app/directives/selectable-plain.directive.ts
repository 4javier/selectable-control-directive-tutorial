import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { startWith, tap } from 'rxjs';

@Directive({
  selector: '[selectablePlain]',
  standalone: true,
})
export class SelectablePlainDirective {
  checkBox: HTMLInputElement;
  constructor(
      private renderer: Renderer2,
      private hostEl: ElementRef,
      private ctrl: NgControl
  ){
    
    this.checkBox = this.renderer.createElement('input');
    this.renderer.setAttribute(this.checkBox, 'type', 'checkbox');

    this.renderer.insertBefore(
        this.renderer.parentNode(this.hostEl.nativeElement),
        this.checkBox,
        this.renderer.nextSibling(this.hostEl.nativeElement)
    );
  
    this.renderer.listen(
        this.checkBox,
        'change', 
        () => this.ctrl.disabled ? this.ctrl.control?.enable() : this.ctrl.control?.disable()
    );

  }

  ngOnInit() {

    this.ctrl.statusChanges?.pipe(
      startWith(this.ctrl.control?.status),
      tap((status: string) => status === "DISABLED" 
            ? this.renderer.setProperty(this.checkBox, 'checked', false)
            : this.renderer.setProperty(this.checkBox, 'checked', true)
      )
    ).subscribe()

  }
}
