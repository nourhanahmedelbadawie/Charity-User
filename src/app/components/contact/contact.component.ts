import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/config/config.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {



  constructor(private fb: FormBuilder ,private configService:ConfigService , private translate: TranslateService
    ) {}

  ngOnInit() {
  }

  currentbreadcrumb:{}={
    title:this.translate.instant("nav.contactUs"),
    subtitle:this.translate.instant("nav.contactUs"),
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/contact"
  }
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email:  ['',[Validators.required, Validators.email]],
    phone: ['' , Validators.required],
    subject: ['' , Validators.required],
    body: ['' , Validators.required]


  });

 
  sendcontactForm(){
    this.configService.contactUS( JSON.stringify(this.contactForm.value))
    .subscribe((data: any) =>()=>{
      this.contactForm.reset()

      Swal.fire({
        title: 'success',
        text: 'Send successfuly',
        icon: 'success',
        confirmButtonText: 'Ok'
      })

    }  ,(err)=>{
      this.contactForm.reset()
      console.log(err)
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong ',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      

    })
  }

}
