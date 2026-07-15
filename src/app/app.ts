import { Component, signal, HostListener, OnInit, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

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
  ],
})
export class App {
  protected readonly title = signal('weddingday');
  @ViewChild('sidenav') sidenav!: MatSidenav;
  deviceWidth!: number;
  opened: boolean = true;

  constructor(private cdr: ChangeDetectorRef ) {}

  isMobile() {
    return this.deviceWidth <= 500;
  }

  ngOnInit() {
    this.deviceWidth = window.innerWidth;
    this.opened = true;
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.deviceWidth = event.target.innerWidth;
    this.cdr.detectChanges();
  }

  toggleSidenav() {
    if (this.isMobile()) {
      this.sidenav.toggle();
      this.opened = !this.opened;
    }
    this.cdr.detectChanges();
  }

}

