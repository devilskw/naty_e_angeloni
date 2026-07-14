import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
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
  ],
})
export class App {
  protected readonly title = signal('weddingday');
}
