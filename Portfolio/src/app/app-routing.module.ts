import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalWindowComponent } from './modal-window/modal-window.component';

const routes: Routes = [
  { path: 'about', component: ModalWindowComponent, data: {key: 'about'} },
  { path: 'contacts', component: ModalWindowComponent, data: {key: 'contacts'} },
  { path: 'education', component: ModalWindowComponent, data: {key: 'education'} },
  { path: 'technologies', component: ModalWindowComponent, data: {key: 'technologies'} },
  { path: 'experience', component: ModalWindowComponent, data: {key: 'experience'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
