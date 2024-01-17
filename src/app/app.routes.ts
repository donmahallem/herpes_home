import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'hass',
        loadChildren: () =>
          import('./routes/hass').then((mod) => mod.HassModule),
      },
    ],
  },
];
