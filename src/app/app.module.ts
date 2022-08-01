import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ClientModule } from './client/client.module';
// import { TestComponent } from './test/test.component';
// import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api';   

@NgModule({
  declarations: [
    AppComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ClientModule
    // AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
