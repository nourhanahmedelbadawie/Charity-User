import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() breadcrumb
  constructor() { 
    console.log(this.breadcrumb)
  }

  ngOnInit() {
  }
  goDown(){
    window.scroll({
      top: 800, 
      left: 0, 
      behavior: 'smooth' 
     });
  }

}
