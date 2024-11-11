import { Routes } from '@angular/router';
import { SettingsComponent } from './features/settings/settings.component';
import { NotificationsComponent } from './features/settings/notifications/notifications.component';

export const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'settings/notifications',
    component: NotificationsComponent,
  },
  {
    path: '',
    redirectTo: '/settings',
    pathMatch: 'full',
  },
];
