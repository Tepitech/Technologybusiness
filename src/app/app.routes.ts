import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services/services.component').then(m => m.ServicesComponent),
  },
  {
    path: 'materials',
    loadComponent: () => import('./features/materials/materials/materials.component').then(m => m.MaterialsComponent),
  },
  {
    path: 'articles',
    loadComponent: () => import('./features/articles/articles/articles.component').then(m => m.ArticlesComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'admin/login',
    loadComponent: () => import('./features/admin/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'admin/add-articles',
    loadComponent: () => import('./features/admin/add-articles/add-articles.component').then(m => m.AddArticlesComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
