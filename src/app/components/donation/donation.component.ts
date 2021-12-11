import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { ConfigService } from 'src/app/config/config.service';

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
 
  constructor(private fb: FormBuilder , private configService:ConfigService) {}

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

  
  donationForm = this.fb.group({
    email:  ['',[Validators.required, Validators.email]],



  });

 
  senddonationForm(){
    this.configService.sendPayment( JSON.stringify(this.donationForm.value))
    .subscribe((data: any) =>{
      console.log(data)
      this.donationForm .reset()


    }  ,(err)=>{
      this.donationForm.reset()

      

    })
  }
}
