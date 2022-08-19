import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private http: HttpClient, public appService : AppService) { }

  userObj:any={};
  userObjNames:any={};
  accountTypesandBalance:any = [];

  ngOnInit(): void {
    debugger;
    this.getDetailsWithUser();
  }

  async getDetailsWithUser()
  {
    debugger;

    await this.appService.getUserData().subscribe(data=>{
    this.userObj = data;
    this.setUserValues();
    this.appService.getUserDetailswithUserName().subscribe(data1=>{
      debugger;
      this.userObjNames = data1;
    });
  });
  }

  setUserValues()
  {
    debugger;
    this.accountTypesandBalance=[];
     for(let i=0;i<this.userObj.length;i++)
    {
       var tempObj ={
        accounttype:'',
        balance:'0',
        accountnumber:''
       }
       tempObj.accounttype = this.userObj[i].accountType;
       tempObj.balance = this.userObj[i].accountBalance;
       tempObj.accountnumber = this.userObj[i].accountNo;
       this.accountTypesandBalance.push(tempObj); 
    }
    this.accountTypesandBalance //account details in this array
    //set values for user here
  }

}
