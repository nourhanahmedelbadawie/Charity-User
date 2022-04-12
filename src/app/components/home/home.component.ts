import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ConfigService } from "../../config/config.service";
import { GetStaticDataService } from "../../config/get-static-data.service";

import { Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { baseUrl } from "src/environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  homeStaticData = null;
  achievementData = null;

  currentbreadcrumb = null;

  urgetDepView: boolean = true;

  urgetDep;

  baseUrl = baseUrl;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl("auto");
  activities = ["act1", "act2", "act3", "other"];
  ngOnInit() {
    // get Home Data
    this.getStaticDataService.getHomeData().subscribe(
      (data) => {
        this.homeStaticData = data;
        // breadcrumb
        this.currentbreadcrumb = {
          title: `${this.homeStaticData.HomeScreenMain.title}`,
          subtitle: this.homeStaticData.HomeScreenMain.subtitle,
          bg: this.homeStaticData.HomeScreenMain.cover_path,

          link: "",
          home: true,
        };
      },
      (err) => console.log(err)
    );

    // get Achivement  Data
    this.getStaticDataService.getAchcData().subscribe((data) => {
      this.achievementData = data;
    });

    //get Urgent Data

    this.getStaticDataService.getUrgentData().subscribe((data) => {
      this.urgetDep = data;
    });
  }

  constructor(
    private fb: FormBuilder,
    private configService: ConfigService,
    private getStaticDataService: GetStaticDataService
  ) {}
  // Make Donation Form

  makeDonationForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
  });

  makeVolunteerForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", Validators.required],
    region: ["", Validators.required],
    activity: ["", Validators.required],
  });
  sendDonar() {
    this.configService
      .PostDoner(JSON.stringify(this.makeDonationForm.value))

      .subscribe(
        (data: any) => {
          this.makeDonationForm.reset();

          Swal.fire({
            title: "success",
            text: "Send successfuly",
            icon: "success",
            confirmButtonText: "Ok",
          });
        },
        (err) => {
          this.makeDonationForm.reset();

          Swal.fire({
            title: "Error",
            text: "Something went wrong ",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
  }

  sendVolunteer() {
    this.configService
      .PostVolunteer(JSON.stringify(this.makeVolunteerForm.value))
      .subscribe(
        (data: any) => {
          this.makeVolunteerForm.reset();
          Swal.fire({
            title: "success",
            text: "Send successfuly",
            icon: "success",
            confirmButtonText: "Ok",
          });
        },
        (err) => {
          this.makeVolunteerForm.reset();
          console.log(err);
          Swal.fire({
            title: "Error",
            text: "Something went wrong ",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
  }
  closeUrgentData() {
    this.urgetDepView = false;
  }
}
