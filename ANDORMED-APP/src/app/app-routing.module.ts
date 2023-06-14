import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component : HomePageComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component : LoginPageComponent },
  { path: 'start', component : StartPageComponent },
  { path: 'forgot-password', component : ForgotPasswordComponent},
  { path : 'register', component : RegisterPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
