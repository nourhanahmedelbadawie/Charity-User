import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ViewComponent } from "./components/view/view.component";
import { NavComponent } from "./components/nav/nav.component";
import { AboutComponent } from "./components/about/about.component";
import { DocumentComponent } from "./components/document/document.component";
import { DonationComponent } from "./components/donation/donation.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { PartnersComponent } from "./components/partners/partners.component";
import { AchievmentComponent } from "./components/achievment/achievment.component";

import { CdkSelectionModule } from "../modules/selection/index";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
 
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NavComponent,
    AboutComponent,
    DocumentComponent,
    DonationComponent,
    ContactComponent,
    HomeComponent,
    PartnersComponent,
    AchievmentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatTabsModule,
    CdkSelectionModule,
    MatProgressSpinnerModule ,

  ],
  exports: [MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
