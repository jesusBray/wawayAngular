import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { BussDetailComponent } from './components/buss-detail/buss-detail.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list'; 
import {MatTableModule} from '@angular/material/table'; 
import { AboutModule } from '../about/about.module';

const router:Routes = [
  {
    path:'home', 
    component:HomeComponent,
    children:[ 
      { path:'detail/:id', component:BussDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    BussDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    AboutModule
  ]
})
export class HomeModule { }
