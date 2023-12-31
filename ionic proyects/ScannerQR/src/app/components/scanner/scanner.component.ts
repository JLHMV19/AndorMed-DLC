import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { VIDEO_CONFIG } from './scanner.const';
import { Subject } from 'rxjs';
import { default as jsQR } from 'jsqr';
import * as QRCode from 'qrcode';
import { CommonModule } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ScannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  videoStream!: MediaStream;
  config = VIDEO_CONFIG;
  private destroy$ = new Subject<void>();
  qrData: string | undefined;
  qrScanned: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    this.prepareScanner();
  }

  async prepareScanner(): Promise<void> {
    const available = await this.checkCamera();
    if (available) {
      this.startScanner();
    }
  }

  currentFacingMode: 'environment' | 'user' = 'environment';

  changeCamera(): void {
    this.currentFacingMode = this.currentFacingMode === 'environment' ? 'user' : 'environment';
    this.config.video.facingMode = this.currentFacingMode;
    this.startScanner();
  }

  async startScanner(): Promise<void> {
    try {
      this.videoStream = await navigator.mediaDevices.getUserMedia(this.config);
      this.videoElement.nativeElement.srcObject = this.videoStream;
      this.spyCamera();
    } catch (error) {
      console.error('Error starting the scanner:', error);
    }
  }
  

  spyCamera(): void {
    if (this.videoElement.nativeElement) {
      const { clientWidth, clientHeight } = this.videoElement.nativeElement;
      this.canvas.nativeElement.width = clientWidth;
      this.canvas.nativeElement.height = clientHeight;

      const canvas = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
      canvas.drawImage(this.videoElement.nativeElement, 0, 0, clientWidth, clientHeight);

      const inversionAttempts = 'dontInvert';
      const image = canvas.getImageData(0, 0, clientWidth, clientHeight);
      const qrcode = jsQR(image.data, image.width, clientHeight, { inversionAttempts });

      if (qrcode) {
        const { data } = qrcode;
        this.qrData = data;
        this.qrScanned = true;
        console.log(data);
      }

      // Continuar el escaneo en bucle
      setTimeout(() => {
        this.spyCamera();
      }, 500);
    }
  }

  generateQRCode(): void {
    const text = 'https://www.example.com'; // Texto o enlace que deseas codificar en el QR
    const options = {
      width: 300, // Anchura en píxeles
      height: 300, // Altura en píxeles
    };

    QRCode.toDataURL(text, options, (err, url) => {
      if (err) {
        console.error('Error al generar el código QR:', err);
      } else {
        console.log('Código QR generado con éxito.');
        console.log(url); // URL del código QR generado en formato de imagen base64
      }
    });
  }

  isURL(value: string): boolean {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(value);
  }

  async checkCamera(): Promise<boolean> {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      }
  
      const hasMediaDevice = 'mediaDevices' in navigator;
      const hasUserMedia = 'getUserMedia' in navigator.mediaDevices;
  
      return hasMediaDevice && hasUserMedia;
    } catch (error) {
      alert('Error al verificar la cámara: ' + error);
      return false;
    }
  }
  
  
  

  ngOnDestroy(): void {
    this.videoStream.getTracks().forEach((track) => track.stop());
    this.videoElement = null!;
    this.destroy$.next();
    this.destroy$.complete();
  }
}
