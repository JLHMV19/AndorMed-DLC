import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {

  constructor(private router: Router) {}

  goToCalendar() {
    this.router.navigate(['/calendar']); // Reemplaza '/calendar' con la ruta real hacia la herramienta de agenda
  }

  goToNotes() {
    this.router.navigate(['/notes']); // Reemplaza '/notes' con la ruta real hacia la herramienta de notas
  }

  goToEmailAutomation() {
    this.router.navigate(['/email-automation']); // Reemplaza '/email-automation' con la ruta real hacia la interfaz de automatización de correo
  }

  goToRemindersView() {
    this.router.navigate(['/reminders-view']); // Reemplaza '/reminders-view' con la ruta real hacia la vista de recordatorios
  }
}
