import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
        private router: Router,
        private appService : AppService,
        private http: HttpClient,
        private appComponent : AppComponent
  ) { }

  public formdata = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  showError: any = false;

  ngOnInit(): void {
  }

  onClickSubmit()
  {
    debugger;

    this.appService.userLoginDetails.username =this.formdata.controls.username.value;
    this.appService.userLoginDetails.password =this.formdata.controls.password.value;

    {
      console.log(this.appService.userLoginDetails);
        this.http.post<any>(this.appService.url+'login',(this.appService.userLoginDetails)).subscribe({
             next: data => {

              if(data.isRegistered=='true')
              {
                localStorage.setItem('userName',this.appService.userLoginDetails.username);
                if(data.isAdmin=='true')
                {
                  this.appService.showName =localStorage.getItem('userName');
                  this.appService.showLogOut =true;
                  // navigate to admin dashboard
                  this.router.navigate(['/adminHome']);
                }
                else
                {
                  //navigate to user dashboard
                  this.appService.showName =localStorage.getItem('userName');
                  this.appService.showLogOut =true;
                  this.router.navigate(['/userHome'])
                }
              }
              else
              this.showError = true;
               //console.log(data);
               //this.appService.returnData = data;
               //localStorage.setItem('userData',this.appService.returnData)
               //console.log(this.appService.returnData);
               //check condition if admin
               //this.router.navigate(['/Register'])
            },  
            error: error => {
                //this.errorMessage = error.message;
              console.error('There was an error!', error);
          }
       })
  }

    console.log(
      this.formdata.controls.username.value,
      this.formdata.controls.password.value,
    );
  }

}
