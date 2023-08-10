import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service'; // Asegúrate de proporcionar la ruta correcta
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pacientes',
  templateUrl: 'pacientes.page.html',
  styleUrls: ['pacientes.page.scss'],
})
export class PacientesPage {
  pacienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController
  ) {
    this.pacienteForm = this.formBuilder.group({
      nombrepacientes: ['', Validators.required],
      RFCpaciente: [''],
      direccion: [''],
      alegias: [''],
    });
  }

  saveDetails() {
    if (this.pacienteForm.valid) {
      this.handleSaveDetails();
      this.navCtrl.navigateRoot('/success'); // Cambia la ruta a la que desees redirigir
    } else {
      this.markFormGroupTouched(this.pacienteForm);
    }
  }

  handleSaveDetails() {
    const formData = {
      nombrepacientes: this.pacienteForm.value.nombrepacientes,
      RFCpaciente: this.pacienteForm.value.RFCpaciente,
      direccion: this.pacienteForm.value.direccion,
      alegias: this.pacienteForm.value.alegias,
      usuarios_idusuarios: this.authService.getUserId(), // Cambia esto por el método correcto para obtener el ID del usuario
    };

    // Llama al servicio para guardar los detalles del paciente
    this.authService.savePacienteDetails(formData).subscribe(
      (response: any) => {
        console.log(response);
        // Aquí puedes manejar la respuesta del servidor después de guardar exitosamente
        // Redirige a la página de éxito
        this.navCtrl.navigateRoot('/success'); // Cambia la ruta a la que desees redirigir
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
