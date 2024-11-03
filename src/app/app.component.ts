import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>{{ title }}</span>
      <button mat-button [matMenuTriggerFor]="menu">Menú</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/characters">Personajes Humanos</button>
        <button mat-menu-item routerLink="/comments">Comentarios Filtrados</button>
      </mat-menu>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HUAMANCHUMO_CORTAVITARTE_MANUEL_ALEJANDRO';
}