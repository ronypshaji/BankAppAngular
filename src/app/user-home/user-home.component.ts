import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private http: HttpClient, private appService : AppService) { }

  mainContainer:boolean = true;
  container1:boolean=false;
  container2:boolean=false;
  container3:boolean=false;
  container4:boolean= false;
  showerr:boolean = false;
  userObj:any={};
  accountTypeDropDown:any=[];
  depositAmount=0;
  withdrawAmount=0;
  dropdown:any;
  accountTypesandBalance:any = [];


  ngOnInit(): void {

    
    this.getDetailsWithUser();
    
  }

  async getDetailsWithUser()
  {
    debugger;

    this.appService.getUserData().subscribe(data=>{
      this.userObj = data;
      this.setUserValues();
  });

    
    // let queryParams = new HttpParams();
    // queryParams = queryParams.append("username",this.appService.showName);
    // return await this.http.get(this.appService.url+'getAccountsForUser',{params:queryParams});
  }

  setUserValues()
  {
    debugger;
    this.accountTypeDropDown=[];  
    this.accountTypesandBalance=[];
     for(let i=0;i<this.userObj.length;i++)
    {
      var tempobj1 ={
        type:'',
        number:''
      }
      tempobj1.type = this.userObj[i].accountType;
      tempobj1.number = this.userObj[i].accountNo
       this.accountTypeDropDown.push(tempobj1)
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
     this.appService.userAccountDetails = this.accountTypesandBalance //account details in this array
    //set values for user here
  }

  depositSubmit()
  {
    debugger;
    if(this.depositAmount > 0 && this.dropdown != undefined)
    {
      var tempObj = {
        accountNo: this.dropdown,
        amount: this.depositAmount
    }


    this.http.post<any>(this.appService.url+'depositMoney',(tempObj)).subscribe({
      next: data => {
        debugger;
        if(data)
        {
         alert("deposited successfully");
         this.resetFlags()
         this.getDetailsWithUser();
        }
      }
    })
    }
    else
    {
      alert("invalid input");
    }
  }


  withdrawSubmit()
  {

    debugger;
    if(this.withdrawAmount > 0 && this.dropdown != undefined)
    {
      var tempObj = {
        accountNo: this.dropdown,
        amount: this.withdrawAmount
    }


    this.http.post<any>(this.appService.url+'withdrawMoney',(tempObj)).subscribe({
      next: data => {
        debugger;
        if(data.message == "withdraw success")
        {
        alert("withdraw success")
        this.resetFlags()
        this.getDetailsWithUser();
        }
        else
        {
          alert("Insufficient fund");
        }
      },
        error: error => {
              debugger;
                 //this.errorMessage = error.message;
                 alert(error.error.text)
                 console.error('There was an error!', error);
      }
    })
    }
    else
    {
      alert("invalid input");
    }
  }




  depositClicked()
  {
    this.mainContainer = false;
    this.container1 = true
  }

  withdrawalClicked()
  {
    this.mainContainer = false;
    this.container2 = true
  }

  transferClicked()
  {
    this.mainContainer = false;
    this.container3 = true
  }

  payBillsClicked()
  {
    this.mainContainer = false;
    this.container4 = true
  }

  resetFlags()
  {

    this.mainContainer = true;
    this.dropdown=undefined;
    this.container1=false;
    this.container2=false;
    this.container3=false;
    this.container4= false;
    this.getDetailsWithUser();

  }

}
