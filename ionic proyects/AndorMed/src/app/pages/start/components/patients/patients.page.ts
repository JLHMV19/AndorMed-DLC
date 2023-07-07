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
    this.authService.mostrarPacientes().subscribe(
      (response: any) => {
        console.log(response.response); // Acceder a response en lugar de response.query
        if (response.ok) {
          this.pacientes = response.response; // Asignar el arreglo de pacientes a this.pacientes
        } else {
          console.error('Error en la respuesta:', response);
        }
      },
      (error) => {
        console.log('Error en la solicitud:', error);
      }
    );
    
  }

}
