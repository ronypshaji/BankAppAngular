import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private appService : AppService,
  ) {
    
   }

  selectedUser:any;
  userDropDown =['A','B','c','D'];
  iscurrentaccount:boolean = true;
  ischequing_account:boolean = true;
  issaving_account:boolean = true;
  error:boolean = false;
  success:boolean = false;
  initialValue1: boolean = false;
  initialValue2: boolean = false;
  initialValue3: boolean = false;
  submitObj = {
    accountNo:'',
    accountType:'',
    accountBalance:'',
    username:''
  }
  accountTypeArr :any=[];
  userNameArr :any = [];
  userDataObj : any = {};

  ngOnInit(): void {
    debugger;
    this.getData();

  }

  getData()
  {
    this.issaving_account = false;
    this.iscurrentaccount = false;
    this.ischequing_account = false;
    this.error = false;
    this.success = false;
    this.initialValue1 = false;
    this.initialValue2 = false;
    this.initialValue3 = false;
    this.selectedUser = '';
    this.accountTypeArr=[];
    this.appService.sampleGetData().subscribe(data=>{
      debugger;
      this.userDataObj = data;
      this.userDropDown= Object.keys(data);
      //this.userDropDown.splice(this.userDropDown.indexOf('admin'),1);
  });
  }

  async submitClicked()
  {
   
    debugger;
    if(this.selectedUser == undefined)
    {
      this.error = true;
    }
    else
    {
      if(this.initialValue1)
      {this.accountTypeArr.push("current")}
      if(this.initialValue2)
      {this.accountTypeArr.push("chequing")}
      if(this.initialValue3)
      {this.accountTypeArr.push("savings")}

      if (this.accountTypeArr.length == 0)
      {
        this.error = true;
      }
      else
      {
        this.accountTypeArr = [...new Set(this.accountTypeArr)];
        for(let i=0;i<this.accountTypeArr.length;i++)
        {
          await this.createAccount(this.accountTypeArr[i]);
        }
      }


      
    }

  }

  cancelClicked()
  {
    this.router.navigate(['/adminHome']);
  }

  iscurrentChecked(e:any)
  {
    
  }

  ischequingChecked(e:any)
  {
    
  }

  issavingsChecked(e:any)
  {
    
  }

  async createAccount(accountType :any)
  {
    this.submitObj.username = this.selectedUser;
    this.submitObj.accountBalance = '0';
    this.submitObj.accountType = accountType;
    await this.http.post<any>(this.appService.url+'createAcc',(this.submitObj)).subscribe({
      next: data => {
        if(data.AccountCreated == 1)
        {
          this.success = true;
          console.log("account added");
          alert("added");
          this.getData();
          
        }

      }
    })
  }

  dopDownSelected()
  {
    debugger;
    this.issaving_account = false;
    this.iscurrentaccount = false;
    this.ischequing_account = false;
    this.error = false;
    this.success = false;
    var accounts = this.userDataObj[this.selectedUser];
    if(accounts.indexOf('savings') > -1)
    {
      this.issaving_account = true;
    }
    if(accounts.indexOf('current') > -1)
    {
      this.iscurrentaccount = true;
    }
    if(accounts.indexOf('chequing') > -1)
    {
      this.ischequing_account = true;
    }
    
  }

}
