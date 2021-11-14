import { Component, OnInit } from "@angular/core";
import { GetStaticDataService } from "src/app/config/get-static-data.service";
import { baseUrl } from "src/environments/environment";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent implements OnInit {
  PartnertData: any;
  currentbreadcrumb: { title: string; subtitle: string; bg: string; link: string; };
  constructor( private getStaticDataService:GetStaticDataService ) { }

  ngOnInit() {

         // get Partner  Data 
         this.getStaticDataService.getPartnerData(
          ).subscribe(data=>{
           this.PartnertData= (data)
           console.log(this.PartnertData)
           this.currentbreadcrumb = {
            title: "Partners",
            subtitle: "Partners",
            bg:`${baseUrl}${this.PartnertData.data.cover_path}`,
            link: "/partners",
          };
       

     })
     
  }
  
}
    
