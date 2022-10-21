import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 

const router: Routes = [
  {
    path:'nosotros', component:AboutComponent,
  }
]

@NgModule({
  declarations: [
    AboutComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class AboutModule { }
