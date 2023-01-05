import { Directive, Renderer2, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox'; 

@Directive({
  selector: '[selectableMat]',
  standalone: true
})
export class SelectableDirectiveMaterialDirective {

  constructor(
    private renderer: Renderer2,
    private vcr: ViewContainerRef,
    private ctrl: NgControl) {}

  ngAfterViewInit() {
    
    const matCheckBox = this.vcr.createComponent(MatCheckbox)
    this.renderer.setStyle(matCheckBox.instance._elementRef.nativeElement, 'pointer-events', 'auto')
    if (this.ctrl.control?.enabled) 
      matCheckBox.setInput('checked', true);
    
    matCheckBox.instance.change.subscribe(
      v => v.checked ? this.ctrl.control?.enable() : this.ctrl.control?.disable()
    );
  }
}
