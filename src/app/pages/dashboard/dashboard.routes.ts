import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
      }
    ]
  }
];
