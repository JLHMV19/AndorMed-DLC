import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  templateUrl: 'pacientes.page.html',
  styleUrls: ['pacientes.page.scss'],
})
export class PacientesPage {
  pacienteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.pacienteForm = this.formBuilder.group({
      nombrepacientes: ['', Validators.required],
      RFCpaciente: [''],
      direccion: [''],
      alegias: [''],
    });
  }

  onSubmit() {
    if (this.pacienteForm.valid) {
      // Aquí puedes realizar una solicitud HTTP a tu servidor para guardar los datos en la base de datos
      console.log('Paciente registrado:', this.pacienteForm.value);
      // Limpia el formulario después de enviarlo
      this.pacienteForm.reset();
    }
  }
}
