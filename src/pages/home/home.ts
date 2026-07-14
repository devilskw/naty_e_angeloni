import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { FlickerService } from '../../services/flicker/flicker';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatIconModule,
    MatSliderModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  isPlaying = true;
  audioSrc = 'assets/music/thecure_lovesong.mp3';

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;

  constructor(private flickerService: FlickerService) { }

  ngOnInit(): void {
  }

  mustFlicker(): boolean {
    return this.flickerService.mustFlicker();
  }

  getTextArray(text: string): string[] {
    return this.flickerService.getTextArray(text);
  }

  tocar() {
    if (!this.isPlaying) {
      this.audioPlayer.nativeElement.play();
    } else {
      this.audioPlayer.nativeElement.pause();
    }
    this.isPlaying = !this.isPlaying;
  }
  
  mudarVolume(event: any) {
    console.log('Volume changed to:', event.target.value);
    this.audioPlayer.nativeElement.volume = event.target.value;
  }

}
/*

<audio #audioPlayer [src]="audioSrc"></audio>
<button (click)="tocar()" *ngIf="!isPlaying">Tocar</button>
<button (click)="pausar()" *ngIf="isPlaying">Pausar</button>
*/