import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmpModule } from './emp/emp.module';
import { AdmModule } from './adm/adm.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EmpModule,
    AdmModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
