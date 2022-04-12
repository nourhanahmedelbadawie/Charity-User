import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { GetStaticDataService } from "src/app/config/get-static-data.service";
import { baseUrl } from "../../../environments/environment";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  baseUrl = baseUrl;
  aboutData: any = {};
  currentbreadcrumb: {
    title: string;
    subtitle: string;
    bg: string;
    link: string;
  };
  choose: { title: any; num: string; content: any }[];

  constructor(
    private getStaticDataService: GetStaticDataService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getStaticDataService.getAboutData().subscribe((data) => {
      this.aboutData = data;

      this.currentbreadcrumb = {
        title: this.translate.instant("nav.aboutus"),
        subtitle: this.translate.instant("nav.aboutus"),

        bg: `${baseUrl}${this.aboutData.AboutUsMain.cover_path}`,
        link: "/about",
      };
      this.choose = [
        {
          title: this.aboutData.AboutUsWhyChooseUs01.title,
          num: "01",
          content: this.aboutData.AboutUsWhyChooseUs01.intro,
        },
        {
          title: this.aboutData.AboutUsWhyChooseUs02.title,
          num: "02",
          content: this.aboutData.AboutUsWhyChooseUs02.intro,
        },
        {
          title: this.aboutData.AboutUsWhyChooseUs03.title,
          num: "03",
          content: this.aboutData.AboutUsWhyChooseUs03.intro,
        },
        {
          title: this.aboutData.AboutUsWhyChooseUs04.title,
          num: "04",
          content: this.aboutData.AboutUsWhyChooseUs04.intro,
        },
      ];
    });
  }

  chooseContent: number = 0;

  setChooseContent(i) {
    this.chooseContent = i;
  }
}
