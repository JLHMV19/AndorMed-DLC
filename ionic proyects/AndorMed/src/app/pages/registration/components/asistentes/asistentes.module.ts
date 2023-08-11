import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistentesPageRoutingModule } from './asistentes-routing.module';

import { AsistentesPage } from './asistentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AsistentesPageRoutingModule
  ],
  declarations: [AsistentesPage]
})
export class AsistentesPageModule {}
