import { PartnersComponent } from "./components/partners/partners.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DonationComponent } from "./components/donation/donation.component";
import { AboutComponent } from "./components/about/about.component";
import { AchievmentComponent } from "./components/achievment/achievment.component";

import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentComponent } from "./components/document/document.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "achievement", component: AchievmentComponent },

  { path: "donation", component: DonationComponent },
  { path: "document", component: DocumentComponent },

  { path: "contact", component: ContactComponent },
  { path: "partners", component: PartnersComponent },

  { path: "*", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
