import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievment',
  templateUrl: './achievment.component.html',
  styleUrls: ['./achievment.component.scss']
})
export class AchievmentComponent implements OnInit {
    currentbreadcrumb:{}={
    title:"Achievement",
    subtitle:"Achievement",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/achievement"
  }

  constructor() { }

  ngOnInit() {
  }

}
