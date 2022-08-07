import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
test : any;
isChecked: any = false;
showError:any = false;
showError1:any = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService : AppService,
    private http: HttpClient
  ) { }

  data:any={};
  public formdata = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    sinNumber:new FormControl(''),
    email: new FormControl(''),
    username:new FormControl(''),
    password:new FormControl(''),
    isAdmin:new FormControl(''),
  });

  ngOnInit(): void {

    this.test ='test';
    
    //   this.appService.sampleGetData().subscribe(data=>{
    //   console.log(data);
    // });

    //this.appService.samplePostData();
    
    //this.formdata.controls.firstName.setValue('Rony Pulickal Shaji'); //setting values working
  }

  async onClickSubmit()
  {
    //getting valuees
    this.appService.userRegisterDetails.username = this.formdata.controls.username.value;
    this.appService.userRegisterDetails.password = this.formdata.controls.password.value;
    this.appService.userRegisterDetails.fname = this.formdata.controls.firstName.value;
    this.appService.userRegisterDetails.lname = this.formdata.controls.lastName.value;
    this.appService.userRegisterDetails.address = this.formdata.controls.address.value;
    this.appService.userRegisterDetails.sinNumber = this.formdata.controls.sinNumber.value;
    this.appService.userRegisterDetails.email = this.formdata.controls.email.value;
    this.appService.userRegisterDetails.phone = this.formdata.controls.phone.value;
    if(this.isChecked)
      this.appService.userRegisterDetails.role= 'admin';
      else
      this.appService.userRegisterDetails.role= 'user';

      if(this.appService.userRegisterDetails.username!="" &&
      this.appService.userRegisterDetails.password!="" &&
      this.appService.userRegisterDetails.fname!=""&&
      this.appService.userRegisterDetails.lname!=""&&
      this.appService.userRegisterDetails.address!=""&&
      this.appService.userRegisterDetails.sinNumber!=""&&
      this.appService.userRegisterDetails.email!=""&&
      this.appService.userRegisterDetails.phone!="")
    {
      console.log(this.appService.userRegisterDetails);
        this.http.post<any>(this.appService.url+'register',(this.appService.userRegisterDetails)).subscribe({
             next: data => {
              if(data.RowsInserted!=0)
              {
                this.router.navigate(['/adminHome'])
              }
              else
              {
                this.showError = true;
              }
               //console.log(data);
               //this.appService.returnData = data;
               //console.log(this.appService.returnData);
               //this.router.navigate(['/'])
            },  
            error: error => {
                //this.errorMessage = error.message;
              console.error('There was an error!', error);
          }
       })
  }
  else
  this.showError1 = true;
    

  
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
