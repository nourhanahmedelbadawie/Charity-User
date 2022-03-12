import { Component, Input, OnInit } from "@angular/core";
import { baseUrl } from "src/environments/environment";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  @Input() breadcrumb;
  baseUrl = baseUrl;


  ngOnInit() {
 
  }
  
  goDown() {
console.log(this.breadcrumb)
    window.scroll({
      top: 800,
      left: 0,
      behavior: "smooth",
    });
  }
}
