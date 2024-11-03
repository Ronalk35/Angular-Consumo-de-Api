import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CommentsComponent } from './comments/comments.component';

export const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
];

