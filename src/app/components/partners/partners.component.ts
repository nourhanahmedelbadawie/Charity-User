import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  currentbreadcrumb: {} = {
    title: "Partners",
    subtitle: "Partners",
    bg: "../../../assets/images/Home/banner/banner.png",
    link: "/partners",
  };
}
