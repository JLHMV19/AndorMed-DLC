import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registrationForm: FormGroup;
  selectedUserType: string = 'patient';

  constructor(private formBuilder: FormBuilder, private router : Router ,private authService: AuthService) {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    // No se requiere ninguna lógica adicional en el método ngOnInit en este caso
  }

  register() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle registration logic based on the selectedUserType
      this.handleRegistration();
    } else {
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  handleRegistration() {
    const formData = {
      type: this.selectedUserType,
      nombre: this.registrationForm.value.fullName,
      fechadeNacimiento: this.registrationForm.value.dateOfBirth,
      genero: this.registrationForm.value.dateOfBirth,
      direccion: this.registrationForm.value.address,
      telefono: this.registrationForm.value.phoneNumber,
      correo: this.registrationForm.value.email,
      contraseña: this.registrationForm.value.password,
      // Agrega aquí los campos adicionales al objeto formData
    };

    this.authService.register(formData).subscribe(
      (response: any) => {
        console.log(response);
        // Aquí puedes manejar la respuesta del servidor después de registrar exitosamente
          this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
        // Aquí puedes manejar errores de registro
      }
    );
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
