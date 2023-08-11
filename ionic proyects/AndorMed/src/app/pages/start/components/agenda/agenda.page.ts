import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {
  fechacitas!: string;
  status!: string;
  idPaciente!: number;
  idDoctor!: number;

  constructor(
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Cita Agendada',
      message: 'La cita se ha agendado correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

  agendarCita() {
    // Verifica que tengas todos los datos necesarios antes de continuar
    if (this.fechacitas && this.status /*&& this.idPaciente && this.idDoctor*/) {
      console.log(this.fechacitas);
      const citaData = {
        fechacitas: this.fechacitas,
        
        status: this.status,
        
        /*
        idPaciente: this.idPaciente,
        idDoctor: this.idDoctor
        */
      };

      // Llama al método del AuthService para agendar la cita
      this.authService.agendarCita(citaData).subscribe(
        (response: any) => {
          console.log('Cita agendada:', response);
          this.presentSuccessAlert();
          // Aquí puedes manejar la respuesta del servidor después de agendar exitosamente
          
        },
        (error) => {
          console.error('Error al agendar la cita:', error);
          // Aquí puedes manejar errores de agendamiento de citas
        }
      );
    } else {
      console.error('Faltan datos para agendar la cita');
      // Manejar el caso en que falten datos en el formulario
    }
  }
}
