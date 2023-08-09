import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {
  fechaCita!: string;
  estado!: string;
  idPaciente!: number;
  idDoctor!: number;

  constructor() {}

  agendarCita() {
    // Implementa aquí la lógica para agendar la cita
    // Puedes usar las propiedades this.fechaCita, this.estado, this.idPaciente, this.idDoctor
    // para obtener los valores del formulario
  }
}
