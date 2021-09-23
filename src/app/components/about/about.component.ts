import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  currentbreadcrumb:{}={
    title:"about",
    subtitle:"about",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/about"
  }
  constructor() { }
  chooseContent:number=0
  choose:{}[]=[{
    title:"Places To Get Lost"
    ,num:
    "01",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in maxime impedit deserunt molestiae nesciunt ab voluptatum ad obcaecati a et quidem officia quam"
  },{
    title:"Help Peaple"
    ,num:
    "02",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in maxime impedit deserunt molestiae nesciunt ab voluptatum ad obcaecati a et quidem officia quam"

  },{
    title:"Food Coverage"
    ,num:
    "03",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in maxime impedit deserunt molestiae nesciunt ab voluptatum ad obcaecati a et quidem officia quam"
  },{
    title:"Clean Water"
    ,num:
    "04",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in maxime impedit deserunt molestiae nesciunt ab voluptatum ad obcaecati a et quidem officia quam"
  }]
  setChooseContent(i){
    console.log(i)
this.chooseContent=i
  }

  ngOnInit() {
  }

}
