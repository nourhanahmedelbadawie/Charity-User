import { Component, Input, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { baseUrl } from "src/environments/environment";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  @Input() breadcrumb;
  baseUrl = baseUrl;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  ngOnInit() {

  }
 
  ar: boolean = true;
  useLanguage(language: string): void {
    this.ar = !this.ar;
    this.translate.use(language);
    !this.ar
      ? document.querySelector("#app_all").classList.add("direction")
      : document.querySelector("#app_all").classList.remove("direction");
  }
  goDown() {
    window.scroll({
      top: 800,
      left: 0,
      behavior: "smooth",
    });
  }
}
