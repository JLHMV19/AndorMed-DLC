import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';


@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage {

  qrText: string = '';
  generatedQRCode: string | null = null;

  constructor() { }

  generateQRCode(event: Event): void {
    event.preventDefault();

    if (this.qrText.trim() !== '') {
      const options = {
        width: 300, // Anchura en píxeles
        height: 300, // Altura en píxeles
      };

      QRCode.toDataURL(this.qrText, options, (err, url) => {
        if (err) {
          console.error('Error al generar el código QR:', err);
        } else {
          console.log('Código QR generado con éxito.');
          console.log(url); // URL del código QR generado en formato de imagen base64
          this.generatedQRCode = url;
        }
      });
    } else {
      this.generatedQRCode = null;
    }
  }

}
