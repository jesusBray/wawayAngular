import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from '../emp/emp';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  api = 'http://localhost:3000/empresatransporte';

  getAllEmpresatransporte(): Observable<Emp[]> {
    const url = this.api;
    return this.http.get<Emp[]>(url, {headers});
  }

  getDetailEmpresatransporte(id:number):Observable<Emp>{
    const url = this.api+"/"+id;
    return this.http.get<Emp>(url,{headers})
  }


}
