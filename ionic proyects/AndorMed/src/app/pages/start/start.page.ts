import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {

  constructor(private router: Router) {}

  goToAgenda() {
    this.router.navigate(['/agenda']); // Reemplaza '/agenda' con la ruta real hacia la interfaz de agenda
  }

  goToPatients() {
    this.router.navigate(['/patients']); // Reemplaza '/patients' con la ruta real hacia la interfaz de pacientes
  }

  goToReminders() {
    this.router.navigate(['/reminders']); // Reemplaza '/reminders' con la ruta real hacia la interfaz de recordatorios
  }

  goToAnotherPage() {
    this.router.navigate(['/another-page']); // Reemplaza '/another-page' con la ruta real hacia la interfaz de otra página
  }
}
