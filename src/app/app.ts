import { Component, signal, HostListener, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
      RouterOutlet
    , RouterLink
    , RouterLinkActive
    , MatSidenavModule
    , MatListModule
    , MatIconModule
    , NgIf
    , MatSliderModule
  ],
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('weddingday');
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;
  deviceWidth!: number;
  opened: boolean = true;
  isPlaying = true;
  audioSrc = 'assets/music/thecure_lovesong.mp3';
  isMuted = true;
  firstTimePlaying = true;

  constructor(private cdr: ChangeDetectorRef ) {}

  isMobile() {
    return this.deviceWidth <= 500;
  }

  ngOnInit() {
    this.deviceWidth = window.innerWidth;
    this.opened = true;
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    if (this.isMuted && this.isPlaying) {
      this.unMute();
      this.tocar();
    }
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.deviceWidth = event.target.innerWidth;
    this.cdr.detectChanges();
  }

  toggleSidenav() {
    console.log("first time", this.firstTimePlaying);
    if (this.firstTimePlaying) {
      this.firstTimePlaying = false;
      console.debug("isPlaying", this.isPlaying);
      if (!this.isPlaying) {
        this.tocar();
      }
    }
    if (this.isMobile()) {
      this.sidenav.toggle();
      this.opened = !this.opened;
    }
    this.cdr.detectChanges();
  }

  tocar() {
    if (!this.isPlaying) {
      console.debug("playing");
      this.audioPlayer.nativeElement.play();
    } else {
      console.debug("paused");
      this.audioPlayer.nativeElement.pause();
    }
    this.isPlaying = !this.isPlaying;
  }
  
  mudarVolume(event: any) {
    console.debug('Volume changed to:', event.target.value);
    this.audioPlayer.nativeElement.volume = event.target.value;
  }

  unMute() {
    this.isMuted = false;
  }

}

