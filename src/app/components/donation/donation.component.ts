import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  currentbreadcrumb:{}={
    title:"Donation",
    subtitle:"lorem ipsum",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/doc"
  }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
 

  ngOnInit() {
  }
 
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    name: [''],
    email: [''],
    phone1: [''],
    phone2: ['']
  });
  visaPayment= this.fb.group({
    donAmount: [''],
    cardNum: [''],
    nameCard: [''],
    expDate: [''] ,
    cvv: [''] 

  });
  items = [
    { label: 'LE', value: 'LE' },
    { label: '$', value: '$' },
    { label: '€', value: '€' }
   
  ];

  selected = [
    'LE'
  ];

  allSelected = [
    'yellow',
    'blue',
    'green',
    'pink',
    'red'
  ];

  onSelectionChange(ev) {
    
    console.log('Change', ev)
  }

  trackBy(model) {
    return model.value;
  }
  onSubmit() {
   console.log('form data is ', this.profileForm.value);
  }

  

  fawryForm= this.fb.group({
    name: ['']

  });

}
