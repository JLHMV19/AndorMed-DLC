import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  citas: any[] = [];
  idcitas: any[]=[];

  constructor(private authService: AuthService, private alertController: AlertController) { }

  ngOnInit() {
    this.getCitas(); // Llama al método para obtener la lista de pacientes al inicializar el componente
  }

  getCitas() {
    this.authService.getCitas().subscribe(
      (response: any[]) => {
        this.citas = response;
      },
      (error) => {
        console.error(error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
  }

  eliminarCita(idcitas: number) {
    this.authService.deleteCita(idcitas).subscribe(
      async (response) => {
        console.log('Cita eliminada:', response);
        // Aquí puedes realizar las acciones necesarias después de eliminar la cita
        // Por ejemplo, actualizar la lista de citas o mostrar un mensaje de éxito
        this.getCitas();

        // Muestra una alerta de éxito
      const alert = await this.alertController.create({
        header: 'Cita Eliminada',
        message: 'La cita se eliminó satisfactoriamente.',
        buttons: ['OK']
      });

      await alert.present();

      },
      (error) => {
        console.error('Error al eliminar la cita:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
      }
    );
  }
  


}
