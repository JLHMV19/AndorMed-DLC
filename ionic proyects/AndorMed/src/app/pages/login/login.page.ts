import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup; // Add an exclamation mark to declare the property without initializer

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

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
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response: any) => {
          // Maneja la respuesta del servidor después de iniciar sesión exitosamente
          console.log(response);
          
          if (response.message === 'Inicio de sesión exitoso') {
            // Redirige al usuario a la página de inicio solo si la autenticación es exitosa
            this.router.navigate(['/start']);
          } else {
            // Maneja el caso en que las credenciales sean inválidas
            console.error('Invalid credentials');
          }
        },
        (error) => {
          // Maneja los errores de inicio de sesión
          console.error(error);
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  
  
  

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }}