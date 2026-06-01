import { Routes } from '@angular/router';
import { Download } from './pages/download/download';
import { Home } from './pages/home/home';
import { Nitro } from './pages/nitro/nitro';

export const routes: Routes = [
  
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'nitro',
    component: Nitro,
  },
  {
    path: 'download',
    component: Download,
  }
];
