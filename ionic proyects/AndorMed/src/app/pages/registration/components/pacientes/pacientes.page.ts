import { Component } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: 'pacientes.page.html',
  styleUrls: ['pacientes.page.scss'],
})
export class PacientesPage {
  pacientes = [
    { nombre: 'Juan Pérez', edad: 30, fechaIngreso: '2023-08-02' },
    { nombre: 'María Gómez', edad: 25, fechaIngreso: '2023-08-01' },
    // Agrega más objetos para más pacientes
  ];

  constructor() {}
}
