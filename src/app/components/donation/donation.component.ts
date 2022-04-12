import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatFormFieldControl } from "@angular/material";
import { ConfigService } from "../../config/config.service";
import { GetStaticDataService } from "../../config/get-static-data.service";

@Component({
  selector: "app-donation",
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.scss"],
})
export class DonationComponent implements OnInit {
  currentbreadcrumb: {} = {
    title: "Donation",
    subtitle: "lorem ipsum",
    bg: "../../../assets/images/about/about_manner.jpg",
    link: "/doc",
  };

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  allDepartment;

  ngOnInit() {}

  constructor(
    private fb: FormBuilder,
    private configService: ConfigService,
    private getStaticDataService: GetStaticDataService
  ) {
    this.getStaticDataService.getAllDepartment().subscribe((res) => {
      this.allDepartment = res;
    });
  }

  profileForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required, Validators.email],
    phone: ["", Validators.required],
    phone1: [""],
  });

  donationForm = this.fb.group({
    amount: ["", Validators.required],
    department_id: ["", Validators.required],
  });
  visaPayment = this.fb.group({
    donAmount: [""],
    cardNum: [""],
    nameCard: [""],
    expDate: [""],
    cvv: [""],
  });
  items = [
    { label: "LE", value: "LE" },
    { label: "$", value: "$" },
    { label: "€", value: "€" },
  ];

  selected = ["LE"];

  allSelected = ["yellow", "blue", "green", "pink", "red"];

  onSelectionChange(ev) {
  }

  trackBy(model) {
    return model.value;
  }

  fawryForm = this.fb.group({
    name: [""],
  });

  sendDonationForm() {
    this.configService
      .sendPayment(
        JSON.stringify({
          ...this.donationForm.value,
          ...this.profileForm.value,
          payment_method_id: 2,
          department_id:1
        })
      )
      .subscribe(
        (data: any) => {
          window.location.href=data.PaymentUrl
          this.donationForm.reset();
          this.profileForm.reset();
        },
        (err) => {
          this.donationForm.reset();
          this.profileForm.reset();
        }
      );
  }
}
