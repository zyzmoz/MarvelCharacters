import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { CharacterPage } from './pages/character-page/character-page';

export const AppRoutes: Routes = [
  { path: '', component: MainPage },
  { path: 'character/:id', component: CharacterPage }

]