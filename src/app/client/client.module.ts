import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientService } from './client.service';
import { CLIENT_ROUTES } from './client.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CLIENT_ROUTES)
  ],
  declarations: [
    ClientListComponent,
    ClientEditComponent
  ],
  providers: [ClientService],
  exports: []
})
export class ClientModule { }
