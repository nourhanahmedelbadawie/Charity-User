import { baseUrl } from './../../../environments/environment';
import { Component, OnInit } from "@angular/core";
import { GetStaticDataService } from "src/app/config/get-static-data.service";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent implements OnInit {
  PartnertData: any;
  PartnertDataInfo: any;
  baseUrl

  currentbreadcrumb: { title: string; subtitle: string; bg: string; link: string; };
  constructor( private getStaticDataService:GetStaticDataService ) { }

  ngOnInit() {
this.baseUrl=baseUrl
         // get Partner  Data 
         this.getStaticDataService.getPartnerData(
          ).subscribe(data=>{
           this.PartnertData= data.data
           this.currentbreadcrumb = {
            title: "Partners",
            subtitle: "Partners",
            bg:`${baseUrl}${this.PartnertData.cover_path}`,
            link: "/partners",
          };
       

     })

     this.getStaticDataService.getPartnerDataInfo(
      ).subscribe(data=>{
   this.PartnertDataInfo= data
 })
     
  }
  
}
    
