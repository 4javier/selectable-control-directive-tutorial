import { ContentChild, Directive, ElementRef, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControlName, NgControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox'; 

@Directive({
  selector: '[selectableMat]',
  standalone: true
})
export class SelectableDirectiveMaterialDirective {

  @ContentChild(FormControlName, {read: NgControl}) ctrl!: NgControl;
  @ViewChild(FormControlName, {read: NgControl}) _rangeCtrl!: NgControl;

  _radioCtrl?: NgControl;
  
  constructor(
      private vcr: ViewContainerRef,
      private el: ElementRef,
  ) {
    if(this.el.nativeElement.nodeName === 'MAT-RADIO-GROUP') {
      this._radioCtrl = inject(NgControl);
    }
  }
  
  ngAfterContentInit() {

    if(this.el.nativeElement.nodeName !== 'MAT-SLIDER') {

      if(this.el.nativeElement.nodeName === 'MAT-RADIO-GROUP') {
        this.ctrl = this._radioCtrl!;
      }
      
      const matCheckBox = this.vcr.createComponent(MatCheckbox)
      if (this.ctrl.control?.enabled){
        matCheckBox.setInput('checked', true);
      }

      matCheckBox.instance.change.subscribe(
        v => v.checked ? this.ctrl.control?.enable() : this.ctrl.control?.disable()
      );
    }
  }

  ngAfterViewInit() {

    if(this.el.nativeElement.nodeName === 'MAT-SLIDER') {

  //    this.ctrl = this._rangeCtrl!;
      const matCheckBox = this.vcr.createComponent(MatCheckbox)
      if (this.ctrl.control?.enabled){
        matCheckBox.setInput('checked', true);
      }

      matCheckBox.instance.change.subscribe(
        v => v.checked ? this.ctrl.control?.enable() : this.ctrl.control?.disable()
      );
    }
  }
}
