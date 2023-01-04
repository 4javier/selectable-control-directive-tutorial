import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlainControlsComponent } from './components/plain-controls/plain-controls.component';

const routes: Routes = [
  { path: '', component: PlainControlsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
