import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() navButton:string[] = [];
  @ViewChild('drawer') drawer!: MatDrawer;

  items = ['some','some2',]
  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() 
  set drawerInput(sendDrawe:boolean){
    this.drawer && this.drawer.toggle(sendDrawe);
  }
}
