import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  sendDrawe = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.sendDrawe = !this.sendDrawe;
  }

  items = ['some','some2', 'navButtonasdasdasdasdasdasdsadasdsad']
}
