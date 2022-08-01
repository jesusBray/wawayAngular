import { Client } from './client';
import { ClientFilter } from './client-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class ClientService {
  clientList: Client[] = [];
  api = 'http://localhost:3000/client';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Client> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Client>(url, {params, headers});
  }

  load(filter: ClientFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.clientList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: ClientFilter): Observable<Client[]> {
    const params = {
      'name': filter.name,
    };

    return this.http.get<Client[]>(this.api, {headers});
  }

  save(entity: Client): Observable<Client> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Client>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Client>(url, entity, {headers, params});
    }
  }

  delete(entity: Client): Observable<Client> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Client>(url, {headers, params});
    }
    return EMPTY;
  }
}

