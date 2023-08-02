import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPage } from './registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  },  {
    path: 'doctor',
    loadChildren: () => import('./components/doctor/doctor.module').then( m => m.DoctorPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
