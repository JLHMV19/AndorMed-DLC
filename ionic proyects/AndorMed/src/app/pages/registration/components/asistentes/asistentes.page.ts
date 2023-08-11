import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistentes',
  templateUrl: './asistentes.page.html',
  styleUrls: ['./asistentes.page.scss'],
})
export class AsistentesPage implements OnInit {
  asistenteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private navCtrl: NavController
  ) { 
    this.asistenteForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      doctores_doctorId: ['', [Validators.required, Validators.minLength(5)]],
      usuarios_idusuarios1: 'noaplica'
    });
  }

  ngOnInit() {}

  saveDetails() {
    if (this.asistenteForm.valid) {
      this.handleSaveDetails();
      this.navCtrl.navigateRoot('/sucess');
    } else {
      this.markFormGroupTouched(this.asistenteForm);
    }
  }

  handleSaveDetails() {
    const formData = {
      nombreAsistente: this.asistenteForm.value.name,
      doctores_doctorId: this.asistenteForm.value.doctores_doctorId,
      usuarios_idusuarios1: 'noaplica', // Cambia esto por el método correcto para obtener el ID del usuario
    };

    // Llama al servicio para guardar los detalles del asistente
    this.authService.saveAsistenteDetails(formData).subscribe(
      (response: any) => {
        console.log(response);
        // Aquí puedes manejar la respuesta del servidor después de guardar exitosamente
        // Redirige a la página de éxito
        this.router.navigate(['/success']); // Cambia la ruta a la que desees redirigir
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
