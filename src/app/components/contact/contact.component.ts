import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { ConfigService } from 'src/app/config/config.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  currentbreadcrumb:{}={
    title:"Contact",
    subtitle:"Get In Touch",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/contact"
  }
  constructor(private fb: FormBuilder ,private configService:ConfigService ) {}

  ngOnInit() {
  }

  
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email:  ['',[Validators.required, Validators.email]],
    phone: ['' , Validators.required],
    subject: ['' , Validators.required],
    body: ['' , Validators.required]


  });

 
  sendcontactForm(){
    console.log(this.contactForm.value)
    this.configService.contactUS( JSON.stringify(this.contactForm.value))
    .subscribe((data: any) =>()=>{
      this.contactForm .reset()

      console.log(data)
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
