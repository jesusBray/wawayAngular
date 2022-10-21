import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmComponent } from './adm/adm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ADM_ROUTES } from './adm.routes';
import { AdmService } from './adm/adm.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidenavModule } from '../sidenav/sidenav.module';





@NgModule({
  declarations: [
    AdmComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ADM_ROUTES),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SidenavModule
  ],
  providers:[
    AdmService,

  ]
})
export class AdmModule { }
