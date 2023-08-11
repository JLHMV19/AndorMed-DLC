import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPage } from './registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  },
  {
    path: 'doctor',
    loadChildren: () => import('./components/doctor/doctor.module').then( m => m.DoctorPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./components/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'asistentes',
    loadChildren: () => import('./components/asistentes/asistentes.module').then( m => m.AsistentesPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
