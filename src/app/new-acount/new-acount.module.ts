import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAcountComponent } from "./new-acount.component";
import { RouterModule, Routes } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {MatFormFieldModule} from '@angular/material/form-field'; 
const router:Routes = [
  {path:'create', component:NewAcountComponent}
]

@NgModule({
  declarations: [
    NewAcountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    AccordionModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CascadeSelectModule,
    MatFormFieldModule
  ]
})
export class NewAcountModule { }
