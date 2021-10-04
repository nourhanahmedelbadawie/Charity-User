import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetStaticDataService } from 'src/app/config/get-static-data.service';

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
  achievementData: any;

  constructor( private getStaticDataService:GetStaticDataService ,private route: ActivatedRoute) { }

  ngOnInit() {
    
     // get Achivement  Data 
     this.getStaticDataService.getOneAchData(this.route.snapshot.paramMap.get('id')
     ).subscribe(data=>{
      this.achievementData= (data)
      console.log(this.achievementData)
    
  
    })
  }
 
}
