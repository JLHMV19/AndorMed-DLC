import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;
  selectedUserType!: string;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    
    this.buildregisterForm();
  }

  buildregisterForm() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      // Agrega otros campos para cada tipo de usuario
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Maneja la lógica de registro según el selectedUserType
      switch (this.selectedUserType) {
        case 'patient':
          // Maneja el registro de paciente
          break;
        case 'doctor':
          // Maneja el registro de doctor
          break;
        case 'admin':
          // Maneja el registro de administrador
          break;
      }
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  goToLogin() {
    this.router.navigate(['/login']); // Utiliza el método navigate en lugar de navigateByUrl
  }
}
