import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {
  doctorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.doctorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      speciality: ['', [Validators.required, Validators.minLength(5)]],
      professionalLicence: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {}

  saveDetails() {
    if (this.doctorForm.valid) {
      this.handleSaveDetails();
    } else {
      this.markFormGroupTouched(this.doctorForm);
    }
  }

  handleSaveDetails() {
    const formData = {
      nombreDoctor: this.doctorForm.value.name,
      especialidad: this.doctorForm.value.speciality,
      cedulaprofesional: this.doctorForm.value.professionalLicence,
      usuarios_idusuarios: this.authService.getUserId(), // Cambia esto por el método correcto para obtener el ID del usuario
    };

    // Llama al servicio para guardar los detalles del doctor
    this.authService.saveDoctorDetails(formData).subscribe(
      (response: any) => {
        console.log(response);
        // Aquí puedes manejar la respuesta del servidor después de guardar exitosamente
        // Redirige a la página de éxito
        this.router.navigate(['/success']); // Cambia la ruta a la que desees redirigir
      },
      (error) => {
        console.error(error);
        // Aquí puedes manejar errores
      }
    );
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
