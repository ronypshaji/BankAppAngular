import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
test : any;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public formdata = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username:new FormControl(''),
    password:new FormControl(''),
  });

  ngOnInit(): void {

    this.test ='test';
    //this.formdata.controls.firstName.setValue('Rony Pulickal Shaji'); //setting values working
  }

  onClickSubmit()
  {
    //getting valuees
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
