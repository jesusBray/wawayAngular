import { Emp } from './emp';
import { EmpFilter } from './emp-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class EmpService {
  empList: Emp[] = [];
  api = 'http://localhost:3000/empresatransporte';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Emp> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Emp>(url, {params, headers});
  }

  load(filter: EmpFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.empList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: EmpFilter): Observable<Emp[]> {
    const params = {
      'nombre': filter.nombre,
    };

    return this.http.get<Emp[]>(this.api, {params, headers});
  }

  save(entity: Emp): Observable<Emp> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.patch<Emp>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Emp>(url, entity, {headers, params});
    }
  }

  delete(entity: Emp): Observable<Emp> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Emp>(url, {headers, params});
    }
    return EMPTY;
  }
}

