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
    path: 'scanner',
    loadChildren: () => import('./components/scanner/scanner.module').then( m => m.ScannerPageModule)
   },
  {
    path: 'generar-qr',
    loadChildren: () => import('./components/scanner/generar-qr/generar-qr.module').then( m => m.GenerarQRPageModule)
  },  {
    path: 'citas',
    loadChildren: () => import('./components/citas/citas.module').then( m => m.CitasPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
