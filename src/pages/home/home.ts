import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlickerService } from '../../services/flicker/flicker';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(private flickerService: FlickerService) { }

  mustFlicker(): boolean {
    return this.flickerService.mustFlicker();
  }

  getTextArray(text: string): string[] {
    return this.flickerService.getTextArray(text);
  }

}
