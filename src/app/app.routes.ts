import { Routes } from '@angular/router';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent), 
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(mod => mod.LoginComponent)
  },
  {
    path: 'acesso-negado',
    loadComponent: () => import('./pages/access-denied/access-denied.component').then(mod => mod.AccessDeniedComponent)
  },
  {
    path: 'nao-encontrado',
    loadComponent: () => import('./pages/not-found/not-found.component').then(mod => mod.NotFoundComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(mod => mod.NotFoundComponent)
  }
];
