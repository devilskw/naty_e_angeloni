import { Injectable } from '@angular/core';
import * as QRCode from 'qrcode';

@Injectable({
  providedIn: 'root' // Disponibiliza o service em toda a aplicação
})
export class PixService {

    
  async generatePix(chavePix: string, nomeRecebedor: string, cidadeRecebedor: string, txid: string, valor: string): Promise<{ pixPayload: string, qrCodeUrl: string }> {
    let pixPayload = '';
    // 2. Montando o Payload do Pix (BR Code)
    const payloadPadrao = `00020126580014br.gov.bcb.pix0136${chavePix}5204000053039865802BR5910${nomeRecebedor}6009${cidadeRecebedor}62070503${txid}6304`;

    try {
        // 3. Calculando o CRC16 (Módulo 1021 do CCITT) para fechar o payload do BCB
        pixPayload = this.gerarCRC16(payloadPadrao);

        // 4. Gerando a imagem do QR Code
        const qrCodeUrl = await QRCode.toDataURL(pixPayload);

        return { 
            pixPayload: pixPayload,
            qrCodeUrl: qrCodeUrl 
        };
    } catch (error) {
        console.error('Erro ao gerar o QR Code', error);
        throw new Error('Erro ao gerar o QR Code');
    }

  }

  
// Algoritmo de validação do BR Code (CRC16)
  private gerarCRC16(payload: string): string {
    let crc = 0xFFFF;
    const polynomial = 0x1021;
    let resultStr = '';

    for (let offset = 0; offset < payload.length; offset++) {
      crc ^= payload.charCodeAt(offset) << 8;
      for (let bit = 0; bit < 8; bit++) {
        if ((crc & 0x8000) !== 0) {
          crc = (crc << 1) ^ polynomial;
        } else {
          crc <<= 1;
        }
      }
    }

    crc &= 0xFFFF;
    resultStr = crc.toString(16).toUpperCase();
    while (resultStr.length < 4) {
      resultStr = '0' + resultStr;
    }

    return payload + resultStr;
  }



}
