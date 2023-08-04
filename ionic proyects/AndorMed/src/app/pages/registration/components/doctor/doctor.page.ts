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
  doctorForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.doctorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      speciality: ['', [Validators.required, Validators.minLength(5)]],
      professionalLicence: ['', [Validators.required, Validators.minLength(5)]],
    });
   }

  ngOnInit() {
  }

  saveDetails() {
    if (this.doctorForm.valid) {
      console.log(this.doctorForm.value);
      // Handle registration logic based on the selectedUserType
      this.handleSaveDetails();
    } else {
      this.markFormGroupTouched(this.doctorForm);
    }
  }

  handleSaveDetails() {
    const formData = {
      name: this.doctorForm.value.name,
      speciality: this.doctorForm.value.speciality,
      professionalLicense: this.doctorForm.value.professionalLicence,
      // Agrega aquí los campos adicionales al objeto formData si es necesario
    };

    // Llama al servicio de autenticación para registrar al usuario
    this.authService.SaveDoctorDetails(formData).subscribe(
      (response: any) => {
        console.log(response);
        // Aquí puedes manejar la respuesta del servidor después de registrar exitosamente
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
