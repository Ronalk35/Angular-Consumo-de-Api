import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  template: `
    <mat-grid-list cols="4" rowHeight="350px">
      <mat-grid-tile *ngFor="let character of humanCharacters">
        <mat-card>
          <mat-card-header>
            <mat-card-title>{{ character.name }}</mat-card-title>
          </mat-card-header>
          <img mat-card-image [src]="character.image" [alt]="character.name" style="width: 200px; height: 200px;">
          <mat-card-content>
            <p>Status: {{ character.status }}</p>
            <p>Species: {{ character.species }}</p>
          </mat-card-content>
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: ['mat-card { width: 90%; height: 90%; } mat-card-title { font-size: 16px; }']
})
export class CharactersComponent implements OnInit {
  humanCharacters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(response => {
        this.humanCharacters = response.results.filter((character: any) => character.species === "Human");
      });
  }
}
