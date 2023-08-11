import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {
  pacientes: any[] = [];
  

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getPacientes(); // Llama al método para obtener la lista de pacientes al inicializar el componente
  }

  getPacientes() {
    this.authService.getPacientes().subscribe(
      (response: any[]) => {
        this.pacientes = response;
      },
      (error) => {
        console.error(error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
  }
}
