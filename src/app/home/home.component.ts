import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp/emp';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.getEmpresasBus()
  }


  getEmpresasBus(){
    this.service.getAllEmpresatransporte().subscribe({
      next: (resp)=>{
        this.data = resp;
        console.log("already!")
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

  getDetailBus(id:any){
    this.service.getDetailEmpresatransporte(id).subscribe({
      next:(resp)=> {
        console.log(resp);
        
      }
    })
  }


  data:Emp[] = [];
}
