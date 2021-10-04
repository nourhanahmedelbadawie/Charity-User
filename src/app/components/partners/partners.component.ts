import { Component, OnInit } from "@angular/core";
import { GetStaticDataService } from "src/app/config/get-static-data.service";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent implements OnInit {
  PartnertData: any;
  constructor( private getStaticDataService:GetStaticDataService ) { }

  ngOnInit() {

         // get Partner  Data 
         this.getStaticDataService.getPartnerData(
          ).subscribe(data=>{
           this.PartnertData= (data)
           console.log(this.PartnertData)
         
       
       
     })
     
  }
  currentbreadcrumb: {} = {
    title: "Partners",
    subtitle: "Partners",
    bg: "../../../assets/images/Home/banner/banner.png",
    link: "/partners",
  };
}
    
