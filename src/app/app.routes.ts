import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { History } from '../pages/history/history';
import { Localizacao } from '../pages/localizacao/localizacao';
import { Manual } from '../pages/manual/manual';
import { Presenca } from '../pages/presenca/presenca';
import { Presentes } from '../pages/presentes/presentes';

export const routes: Routes = [
  { 
      path: ''
    , component: Home
  },
  { 
      path: 'home'
    , component: Home
  },
  {
      path: 'localizacao'
    , component: Localizacao
  },
  {
      path: 'historia'
    , component: History
  },
  {
      path: 'manual'
    , component: Manual
  },
  {
      path: 'presenca'
    , component: Presenca
  },
  {
      path: 'presentes'
    , component: Presentes
  }
];
