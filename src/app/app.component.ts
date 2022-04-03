import { Component } from "@angular/core";
import { ViewComponent } from "./components/view/view.component";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  title = "future-protectors";

}
