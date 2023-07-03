import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPage } from './start.page';

const routes: Routes = [
  {
    path: '',
    component: StartPage
  },
  {
    path: 'agenda',
    loadChildren: () => import('./components/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'patients',
    loadChildren: () => import('./components/patients/patients.module').then( m => m.PatientsPageModule)
  },
  {
    path: 'reminders',
    loadChildren: () => import('./components/reminders/reminders.module').then( m => m.RemindersPageModule)
  },
   {
    path: 'scanner',
    loadChildren: () => import('./components/scanner/scanner.module').then( m => m.ScannerPageModule)
   },
  {
    path: 'generar-qr',
    loadChildren: () => import('./components/scanner/generar-qr/generar-qr.module').then( m => m.GenerarQRPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
