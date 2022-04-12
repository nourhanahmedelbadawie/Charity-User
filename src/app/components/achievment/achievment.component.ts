import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { GetStaticDataService } from "src/app/config/get-static-data.service";
import { baseUrl } from "../../../environments/environment";

@Component({
  selector: "app-achievment",
  templateUrl: "./achievment.component.html",
  styleUrls: ["./achievment.component.scss"],
})
export class AchievmentComponent implements OnInit {
  achievementData: any;
  baseUrl = baseUrl;
  currentbreadcrumb: {
    title: string;
    subtitle: string;
    bg: string;
    link: string;
  };

  constructor(
    private getStaticDataService: GetStaticDataService,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    // get Achivement  Data
    this.getStaticDataService
      .getOneAchData(this.route.snapshot.paramMap.get("id"))
      .subscribe((data) => {
        this.achievementData = data;
        this.currentbreadcrumb = {
          title: this.translate.instant("nav.achievement"),
          subtitle: this.translate.instant("nav.achievement"),
          bg: `${baseUrl}${this.achievementData.cover_path}`,
          link: "/achievement",
        };
      });
 
  }
}
