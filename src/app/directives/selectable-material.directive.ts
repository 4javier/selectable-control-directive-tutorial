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
  disablingCheckbox: ComponentRef<MatCheckbox>;
  constructor(
      private vcr: ViewContainerRef,
      private el: ElementRef,
  ) {
    this.disablingCheckbox = this.vcr.createComponent(MatCheckbox)
    
  ngAfterContentInit() {

    this.disablingCheckbox.instance.change.subscribe(
      v => v.checked ? this.ctrl.control?.enable() : this.ctrl.control?.disable()
    );

      this.ctrl.control?.statusChanges?.pipe(
        startWith(this.ctrl.control?.disabled ? 'DISABLED' : ''),
        tap((status: string) => status === 'DISABLED' 
              ? this.disablingCheckbox.setInput('checked', false)
              : this.disablingCheckbox.setInput('checked', true)
        )
      ).subscribe()

  }
}
