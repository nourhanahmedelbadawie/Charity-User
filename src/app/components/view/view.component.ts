import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ConfigService } from 'src/app/config/config.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  loader:boolean=true
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto')

  ngOnInit() {
    setTimeout(()=>{
   this.loader=false

    } ,2000)
  }

 
 


  constructor(private fb: FormBuilder ,private configService:ConfigService ) {

  }
        // Make Donation Form 

        subscribeForm =  this.fb.group({
type: ['', Validators.required], 
email:  ['',[Validators.required, Validators.email]],

});




subscribe(){
  console.log( this.subscribeForm.value)
  this.configService.subscribe( JSON.stringify(this.subscribeForm.value))
    .subscribe((data: any) =>{
      this.subscribeForm.reset()
      console.log(data)
          Swal.fire({
          title: 'success',
          text: 'Send successfuly',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
    } ,(err)=>{
      this.subscribeForm.reset()
      console.log(err)


      Swal.fire({
        title: 'Error',
        text: 'Something went wrong ',
        icon: 'error',
        confirmButtonText: 'Ok'
      })


    } );
}
      }
  


