import { Component, OnInit } from '@angular/core';
import {  GetStaticDataService} from "../../config/get-static-data.service";
import { baseUrl } from "../../../environments/environment";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  files:[]=[]
  DocStaticData
  baseUrl=baseUrl
  currentbreadcrumb: { title: string; subtitle: string; bg: string; link: string; };

  constructor(
    private getStaticDataService:GetStaticDataService )  { }

  ngOnInit() {
// get static data 

this.getStaticDataService.getDocPageStaticData().subscribe(data=>{
  this.DocStaticData=data
  console.log(data)
})
    this.getStaticDataService.getDocData().subscribe(data=>{
      this.files=data
      console.log(data)
    })
    this.currentbreadcrumb={
      title:"Document",
      subtitle:"Document",
      bg:`${baseUrl}${this.DocStaticData.cover_path}`,
      link:"/doc"
    }
  }
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

}
