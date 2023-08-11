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
    { value: 'asistente', label: 'Asistente' },
    // Puedes agregar más opciones según tus necesidades
  ];

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.registrationForm = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      contraseña: ['', Validators.required],
      privilegio: ['', Validators.required],
      correo: ['', [Validators.required, Validators.minLength(5)]],
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
      correo: this.registrationForm.value.correo,
      // Agrega aquí los campos adicionales al objeto formData si es necesario
    };

    // Llama al servicio de autenticación para registrar al usuario
    this.authService.register(formData).subscribe(
      (response: any) => {
        console.log(response);
        // Aquí puedes manejar la respuesta del servidor después de registrar exitosamente
        if (formData.privilegio === 'doctor') {
          this.router.navigate(['/doctor-registration']); // Redirige a la página de registro de doctores
        } else if (formData.privilegio === 'patient') {
          this.router.navigate(['/pacientes-registration']); // Agrega la ruta a la página del paciente si se registra como paciente
        } else if (formData.privilegio === 'asistente') {
          this.router.navigate(['/asistentes-registration']); // Agrega la ruta a la página del administrador si se registra como administrador
        }
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
