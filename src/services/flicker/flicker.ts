import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Disponibiliza o service em toda a aplicação
})
export class FlickerService {

  getRandomDelay(): string {
    return `${Math.floor(Math.random() * 5)}s`;
  }

  mustFlicker(): boolean {
    return Math.random() > 0.575;
  }

  getTextArray(text: string): string[] {
    return text.split('');
  }

}
