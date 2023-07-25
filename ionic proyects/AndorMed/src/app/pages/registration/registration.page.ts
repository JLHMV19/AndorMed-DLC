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
  privilegioOptions = [
    { value: 'patient', label: 'Paciente' },
    { value: 'doctor', label: 'Doctor' },
    { value: 'admin', label: 'Administrador' },
    // Puedes agregar más opciones según tus necesidades
  ];

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.registrationForm = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      contraseña: ['', Validators.required],
      privilegio: ['', Validators.required],
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
      nombreUsuario: this.registrationForm.value.nombreUsuario,
      contraseña: this.registrationForm.value.contraseña,
      privilegio: this.registrationForm.value.privilegio,
      // Agrega aquí los campos adicionales al objeto formData si es necesario
    };

    // Llama al servicio de autenticación para registrar al usuario
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

