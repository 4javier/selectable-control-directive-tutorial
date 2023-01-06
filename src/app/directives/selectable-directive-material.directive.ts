import { ContentChild, Directive, ElementRef, inject, ViewContainerRef } from '@angular/core';
import { FormControlName, NgControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox'; 

@Directive({
  selector: '[selectableMat]',
  standalone: true
})
export class SelectableDirectiveMaterialDirective {

  @ContentChild(FormControlName, {read: NgControl}) ctrl!: NgControl;
  _radioCtrl?: NgControl;
  
  constructor(
      private vcr: ViewContainerRef,
      private el: ElementRef,
  ) {
    if(this.el.nativeElement.nodeName === 'MAT-RADIO-GROUP') {
      this._radioCtrl = inject(NgControl);
    }
  }
  
  ngAfterViewInit() {

    if(this.el.nativeElement.nodeName === 'MAT-RADIO-GROUP') {
      this.ctrl = this._radioCtrl!;
    }
    
    const matCheckBox = this.vcr.createComponent(MatCheckbox)
  //  this.renderer.setStyle(matCheckBox.instance._elementRef.nativeElement, 'pointer-events', 'auto')
    if (this.ctrl.control?.enabled) 
      matCheckBox.setInput('checked', true);
    
    matCheckBox.instance.change.subscribe(
      v => v.checked ? this.ctrl.control?.enable() : this.ctrl.control?.disable()
    );

  }
}
