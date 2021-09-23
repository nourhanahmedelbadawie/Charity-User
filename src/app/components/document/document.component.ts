import { Component, OnInit } from '@angular/core';
import {  GetStaticDataService} from "../../config/get-static-data.service";
import { baseUrl } from "../../../environments/environment";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  currentbreadcrumb:{}={
    title:"Document",
    subtitle:"Document",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/doc"
  }
  files:[]=[]
  baseUrl=baseUrl
//   {
//     "id": 1,
//     "title": "this is title",
//     "intro": "intro",
//     "image_path": "documents/1/image/jrV9BnUgrK610d603cc844f.png",
//     "file_path": "documents/1/file/k5P2ScyVXY610e3632af749.pdf",
//     "created_at": "2021-08-06T12:15:56.000000Z",
//     "updated_at": "2021-08-07T03:28:50.000000Z"
// }
  constructor(
    private getStaticDataService:GetStaticDataService )  { }

  ngOnInit() {

    this.getStaticDataService.getDocData().subscribe(data=>{
      this.files=data
      console.log(data)
    })
  }
  // http://178.62.19.101:8888/index.php/api
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

}
