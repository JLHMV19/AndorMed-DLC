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
      nombreDoctor: this.asistenteForm.value.name,
      usuarios_idusuarios: this.authService.getUserId(), // Cambia esto por el método correcto para obtener el ID del usuario
    };
}

markFormGroupTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach((control) => {
    control.markAsTouched();
  });
}
}
