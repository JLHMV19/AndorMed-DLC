import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { AuthGuard } from 'src/app/services/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup; // Add an exclamation mark to declare the property without initializer

  constructor(private formBuilder: FormBuilder, private router: Router, private servicio: ServicesService) {}

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Llamar al método login() del servicio para establecer isLoggedIn en true
      this.servicio.login();
      this.router.navigate(['/start']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }}
