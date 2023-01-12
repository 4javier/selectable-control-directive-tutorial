import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { SelectableMaterialDirective } from 'src/app/directives/selectable-material.directive';

@Component({
  selector: 'app-material-controls',
  standalone: true,
  imports: [ReactiveFormsModule, SelectableMaterialDirective,
            MatFormFieldModule, MatInputModule, MatRadioModule,
            MatSelectModule, MatSliderModule, MatButtonModule],
  templateUrl: './material-controls.component.html',
  styleUrls: ['./material-controls.component.scss']
})
export class MaterialControlsComponent {

  plainForm = new FormGroup({
    text: new FormControl(''),
    number: new FormControl(0),
    radio: new FormControl('no'),
    range: new FormControl({value: 0, disabled:true}),
    singleSel: new FormControl(''),
    multiSel: new FormControl([]),
  });

  constructor() { }
  showSubmitObject() {
    window.alert("Object submitted:\n\n"+JSON.stringify(this.plainForm.value, null, 2))
  }

  disableRange() {
    this.plainForm.controls.range.disable();
  }
}
