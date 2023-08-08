import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/start/components/scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'doctor-registration',
    loadChildren: () => import('./pages/registration/components/doctor/doctor.module').then( m => m.DoctorPageModule)
  },
  {
    path: 'pacientes-registration',
    loadChildren: () => import('./pages/registration/components/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },

  {
    path: 'sucess',
    loadChildren: () => import('./pages/registration/components/doctor/success/success.module').then( m => m.SuccessPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
