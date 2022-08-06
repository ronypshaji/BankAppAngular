import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
test : any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService : AppService
  ) { }

  public formdata = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    username:new FormControl(''),
    password:new FormControl(''),
  });

  ngOnInit(): void {

    this.test ='test';
    
      this.appService.sampleGetData().subscribe(data=>{
      console.log(data);
    });

    this.appService.samplePostData();
    
    //this.formdata.controls.firstName.setValue('Rony Pulickal Shaji'); //setting values working
  }

  onClickSubmit()
  {
    //getting valuees
    this.appService.userRegisterDetails.username = this.formdata.controls.username.value;
    this.appService.userRegisterDetails.password = this.formdata.controls.password.value;
    this.appService.userRegisterDetails.fname = this.formdata.controls.firstName.value;
    this.appService.userRegisterDetails.lname = this.formdata.controls.lastName.value;
    this.appService.userRegisterDetails.address = this.formdata.controls.address.value;
    this.appService.userRegisterDetails.email = this.formdata.controls.email.value;
    this.appService.userRegisterDetails.phone = this.formdata.controls.phone.value;
    this.appService.registerUserData();
    // var submittedDetails={
    //   username:this.formdata.controls.username.value,
    //   password:this.formdata.controls.password.value,
    //   fname:this.formdata.controls.firstName.value,
    //   lname:this.formdata.controls.lastName.value,
    //   address:this.formdata.controls.address.value,
    //   email:this.formdata.controls.email.value,
    //   phone:this.formdata.controls.phone.value,
    // };
    //this.appService.registerUserData(submittedDetails);
    //submittedDetails.username = this.formdata.controls.username.value,

    console.log(
      this.formdata.controls.firstName.value,
      this.formdata.controls.lastName.value,
      this.formdata.controls.username.value,
      this.formdata.controls.password.value,
    );
    
  }

  // testMethod()
  // {
  //   debugger;
  //   alert(this.test);
  // }


}
