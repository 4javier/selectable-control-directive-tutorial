import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialControlsComponent } from './components/material-controls/material-controls.component';
import { PlainControlsComponent } from './components/plain-controls/plain-controls.component';

const routes: Routes = [
  { path: 'plain', component: PlainControlsComponent },
  { path: 'material', component: MaterialControlsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
