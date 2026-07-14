//import { Component, OnInit, ChangeDetectorRef, afterRenderEffect } from '@angular/core';
//import { PixService } from '../../services/pix/pix';
//import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentes',
  //imports: [CommonModule, NgIf],
  imports: [],
  templateUrl: './presentes.html',
  styleUrl: './presentes.scss',
})
export class Presentes {
  constructor(){}
}

// export class Presentes implements OnInit {
//   pixPayload: string = '';
//   qrCodeUrl: string = '';

//   constructor(private cdr: ChangeDetectorRef, private pixService: PixService) { }

//   async ngOnInit(): Promise<void> {
//     await this.loadPixQrCode();
//     afterRenderEffect(() => {
//       this.cdr.detectChanges();
//     });
//   }

//   async loadPixQrCode() {
//     try {
//       const pix = await this.pixService.generatePix('11.99739-4001', 'Natalia de Pinho', 'SAO PAULO', '***', '');
//       this.pixPayload = pix.pixPayload;
//       this.qrCodeUrl = pix.qrCodeUrl;
//       console.log('PIX Payload:', pix.pixPayload);
//       console.log('QR Code Data URL:', pix.qrCodeUrl);
//       this.cdr.detectChanges();
//     } catch (error) {
//       console.error('Erro ao gerar o QR Code:', error);
//     }
//   }

// }
