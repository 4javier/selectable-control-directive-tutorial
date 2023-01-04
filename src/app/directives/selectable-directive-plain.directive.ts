import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, NgControl, ReactiveFormsModule } from '@angular/forms';

@Directive({
  selector: '[selectablePlain]',
  standalone: true,
})
export class SelectablePlainDirective {

  constructor(
    private renderer: Renderer2,
    private hostEl: ElementRef,
    private ctrl: NgControl) {}

  ngAfterViewInit() {
    const checkBox = this.renderer.createElement('input') as HTMLInputElement;
    this.renderer.setAttribute(checkBox, 'type', 'checkbox');
    
    if (this.ctrl.control?.enabled) 
      this.renderer.setAttribute(checkBox, 'checked', '');
    
    this.renderer.insertBefore(
        this.renderer.parentNode(this.hostEl.nativeElement),
        checkBox,
        this.renderer.nextSibling(this.hostEl.nativeElement)
    );
    
    this.renderer.listen(
      checkBox,
      'change', 
      () => checkBox.checked ? this.ctrl.control?.enable() : this.ctrl.control?.disable()
    );
  }

}
