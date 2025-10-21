import { Routes } from '@angular/router';

export const routes: Routes = [
  // Users Feature - Lazy Loading con rutas modulares
  {
    path: 'users',
    loadChildren: () => import('./features/users/user.routes').then((m) => m.userRoutes),
  },

  // Default route - redirect to users
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },

  // Wildcard route - should be last
  {
    path: '**',
    redirectTo: '/users',
  },
];
