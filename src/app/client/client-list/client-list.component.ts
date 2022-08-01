import { Component, OnInit } from '@angular/core';
import { ClientFilter } from '../client-filter';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-client',
  templateUrl: 'client-list.component.html'
})
export class ClientListComponent implements OnInit {

  filter = new ClientFilter();
  selectedClient!: Client;
  feedback: any = {};

  get clientList(): Client[] {
    return this.clientService.clientList;
  }

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.clientService.load(this.filter);
  }

  select(selected: Client): void {
    this.selectedClient = selected;
  }

  delete(client: Client): void {
    if (confirm('Are you sure?')) {
      this.clientService.delete(client).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }
}
