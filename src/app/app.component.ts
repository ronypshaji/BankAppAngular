import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'banking_app';
  constructor(
        public appService : AppService,
        private router: Router,
  ) { }
  ngOnInit(): void {

    
  }

  logOutMethod()
  {
    this.appService.showName ="";
    this.appService.showLogOut =false;
    localStorage.clear();
    this.router.navigate([''])

  }

  homeClicked()
  {
    debugger;
    if(localStorage.getItem('isAdmin') == 'true')
    {
      this.router.navigate(['adminHome']);
    }
    else
    if(localStorage.getItem('isAdmin') == 'false')
    {
      this.router.navigate(['userHome']);
    }
    else
    {
      this.router.navigate(['']);
    }
  }

  userDetailsComp()
  {
    this.router.navigate(['userDetails'])
  }

}
