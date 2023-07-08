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
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response: any) => {
          console.log(response.message); // Imprime el mensaje de inicio de sesión
          console.log(response.user); // Imprime el objeto de usuario
          
          if (response.message === 'Inicio de sesión exitoso') {
            // Almacena el token en el servicio AuthService
            this.authService.setToken(response.token);
            // Redirige al usuario a la página de inicio si la autenticación es exitosa
            this.router.navigate(['/start']);
          } else {
            // Maneja el caso en que las credenciales sean inválidas
            console.error('Credenciales inválidas');
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
  }
}
