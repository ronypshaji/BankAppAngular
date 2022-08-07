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

}
