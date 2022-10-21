import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmComponent } from './adm/adm.component';

export const ADM_ROUTES: Routes = [
  {
    path: 'adm',
    component: AdmComponent
  },
  {
    path: 'adm/:id',
    component: DashboardComponent
  },
  // {
  //   path: 'emps/:id',
  //   component: AdmComponent
  // }
];
