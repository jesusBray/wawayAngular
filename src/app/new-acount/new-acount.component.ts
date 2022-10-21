import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Acount } from './acount';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Component({
  selector: 'app-new-acount',
  templateUrl: './new-acount.component.html',
  styleUrls: ['./new-acount.component.css']
})
export class NewAcountComponent implements OnInit {

  alert!:string;
  acount!:FormGroup;

    // clientList: Client[] = [];
    api = 'http://localhost:3000/client';
  
  constructor(
    private fb:FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.acount = this.fb.group({
      name:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required],
      description:[""]
    })
  }

  newAcount(){
    console.log(this.acount.value);
    
    this.save(this.acount.value).subscribe({
      next: (resp) => {
        console.log(resp);
        // resp.access_token &&
        // this.router.navigate(['/clients']);
      }
    });
  }

  back(){
    this.router.navigate(['/login'])
  }

  save(entity: Acount): Observable<Acount> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      this.alert = "Cuenta creada exiotsamente"
      return this.http.put<Acount>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      this.alert = "No se a podido crear"
      return this.http.post<Acount>(url, entity, {headers, params});
    }
  }

  

}
