import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Comentarios con dominio garfield.biz</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-list>
          <mat-list-item *ngFor="let comment of filteredComments">
            <h3 matListItemTitle>{{ comment.name }}</h3>
            <p matListItemLine>{{ comment.email }}</p>
            <p matListItemLine>{{ comment.body }}</p>
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: ['mat-card { margin: 20px; }']
})
export class CommentsComponent implements OnInit {
  filteredComments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(comments => {
        this.filteredComments = comments.filter(comment => comment.email.endsWith('@garfield.biz'));
      });
  }
}