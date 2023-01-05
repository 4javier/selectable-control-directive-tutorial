import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-material-controls',
  standalone: true,
  imports: [ReactiveFormsModule,
            MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule],
  templateUrl: './material-controls.component.html',
  styleUrls: ['./material-controls.component.scss']
})
export class MaterialControlsComponent {

  plainForm = new FormGroup({
    text: new FormControl(''),
    number: new FormControl(0),
    radio: new FormControl('no'),
    range: new FormControl(0),
    singleSel: new FormControl(''),
    multiSel: new FormControl([]),
  });

  constructor() { }
  showSubmitObject() {
    window.alert("Object submitted:\n\n"+JSON.stringify(this.plainForm.value, null, 2))
  }
}
