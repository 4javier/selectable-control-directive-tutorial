import { ComponentRef, ContentChild, Directive, ElementRef, inject, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox'; 
import { startWith, tap } from 'rxjs';

@Directive({
  selector: '[selectableMat]',
  standalone: true
})
export class SelectableMaterialDirective {

  @ContentChild(NgControl) ctrl!: NgControl;
  _radioCtrl?: NgControl;
  disablingCheckbox: ComponentRef<MatCheckbox>;
  constructor(
      private vcr: ViewContainerRef,
      private el: ElementRef,
  ) {
    this.disablingCheckbox = this.vcr.createComponent(MatCheckbox)
    
    if (this.el.nativeElement.nodeName === 'MAT-RADIO-GROUP') {
      this._radioCtrl = inject(NgControl);
    }

  }
  
  ngAfterContentInit() {

    if (this.el.nativeElement.nodeName === 'MAT-RADIO-GROUP') {
      this.ctrl = this._radioCtrl!;
    }
          
    this.disablingCheckbox.instance.change.subscribe(
      v => v.checked ? this.ctrl.control?.enable() : this.ctrl.control?.disable()
    );

    setTimeout(() =>
      this.ctrl.control?.statusChanges?.pipe(
        startWith(this.ctrl.control?.disabled ? 'DISABLED' : ''),
        tap((status: string) => status === 'DISABLED' 
              ? this.disablingCheckbox.setInput('checked', false)
              : this.disablingCheckbox.setInput('checked', true)
        )
      ).subscribe()
    )

  }
}
