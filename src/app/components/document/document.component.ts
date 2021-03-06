import { Component, OnInit } from "@angular/core";
import { GetStaticDataService } from "../../config/get-static-data.service";
import { baseUrl } from "../../../environments/environment";
import { FormBuilder, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { ConfigService } from "../../config/config.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html",
  styleUrls: ["./document.component.scss"],
})
export class DocumentComponent implements OnInit {
  files: [] = [];
  DocStaticData;
  baseUrl = baseUrl;
  viewModal = false;
  submitClicked = false;
  currentbreadcrumb: {
    title: string;
    subtitle: string;
    bg: string;
    link: string;
  };
  documentDownloaded: any;

  constructor(
    private fb: FormBuilder,
    private getStaticDataService: GetStaticDataService,
    private configService: ConfigService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    // get static data

    this.getStaticDataService.getDocPageStaticData().subscribe((res) => {
      this.DocStaticData = res.data;
      this.currentbreadcrumb = {
        title: this.translate.instant("docs.title"),
        subtitle: this.translate.instant("docs.title"),
        bg: `${baseUrl}${this.DocStaticData.cover_path}`,
        link: "/doc",
      };
    });
    this.getStaticDataService.getDocData().subscribe((data) => {
      this.files = data;
    });
  }

  // download pdf
  setDocumentDownloaded(item) {
    this.documentDownloaded = item;
    this.viewModal = true;
  }
  downloadForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", Validators.required],
  });

  sendDownloadForm() {
    this.submitClicked = true;
    this.configService
      .downloadDocument({
        ...this.downloadForm.value,
        document_id: this.documentDownloaded.id,
      })
      .subscribe(
        (data: any) => {
          this.downloadForm.reset();
          this.viewModal = false;
          this.submitClicked = false;

          Swal.fire({
            title: "success",
            text: "Send successfuly",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((data) => {
            window.open(
              `${baseUrl + this.documentDownloaded.file_path}`,
              "_blank",
              "fullscreen=yes"
            );
            return false;
          });
        },
        (err) => {
          this.downloadForm.reset();
          this.viewModal = false;
          this.submitClicked = false;

          Swal.fire({
            title: "Error",
            text: "Something went wrong ",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
  }
}
