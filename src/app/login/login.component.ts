import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  api = 'auth';
  path = `${environment.patBackend}/${this.api}`
  dataForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      email:[""],
      password:[""]
    })
  }

  login(){
    this.save().subscribe({
      next:(resp)=>{
        console.log(resp);
        resp.access_token && 
        this.router.navigate(['/clients']);
      }
    })
  }

  createAcount(){
    this.router.navigate(['/create']);
  }

  save(): Observable<any> {
    let params = new HttpParams();
    return this.http.post<any>(this.path, this.dataForm.value, {headers, params});
  }
}
