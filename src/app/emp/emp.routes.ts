import { Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';

export const EMP_ROUTES: Routes = [
  {
    path: 'emps',
    component: EmpListComponent
  },
  {
    path: 'emps/:id',
    component: EmpEditComponent
  }
];
