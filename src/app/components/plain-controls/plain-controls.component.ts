import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectablePlainDirective } from 'src/app/directives/selectable-plain.directive';
@Component({
  selector: 'app-plain-controls',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectablePlainDirective],
  templateUrl: './plain-controls.component.html',
  styleUrls: ['./plain-controls.component.scss']
})
export class PlainControlsComponent {

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
