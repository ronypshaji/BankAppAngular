import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  returnData:any={};
  userRegisterDetails:any = {
    
      username:'',
      password:'',
      fname:'',
      lname:'',
      address:'',
      sinNumber:'',
      email:'',
      phone:'',
    
  };

  userLoginDetails:any = {
    
    username:'',
    password:'',
  
};
showLogOut:any = false;
showName:any =""
userAccountDetails:any = [];

  constructor(private http: HttpClient) {}

  url = `http://localhost:8080/`;
  postData = {
    test: 'my content',
  };


//   samplePostData()
//   {
//     debugger;
//     {
//         this.http.post<any>(this.url, this.postData).subscribe({
//              next: data => {
//                console.log(data);
//                console.log(JSON.parse(data.data));
//             },
//             error: error => {
//                 //this.errorMessage = error.message;
//               console.error('There was an error!', error);
//           }
//        })
//   }
// }


// registerUserData()
// {
//   debugger;
//   {
//     console.log(this.userRegisterDetails);
//       this.http.post<any>(this.url+'register',(this.userRegisterDetails)).subscribe({
//            next: data => {
//              //console.log(data);
//              return data;
//              //console.log(JSON.parse(data.data));
//           },  
//           error: error => {
//               //this.errorMessage = error.message;
//             console.error('There was an error!', error);
//         }
//      })
// }
// }



  //  registerUser()
  //  {
  //   this.http.post<any>('https://reqres.in/invalid-url', { title: 'Angular POST Request Example' }).subscribe({
  //       next: data => {
  //           //this.postId = data.id;
  //       },
  //       error: error => {
  //           //this.errorMessage = error.message;
  //           console.error('There was an error!', error);
  //       }
  //   })
  //  }

   sampleGetData()
   {
    //let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(this.url+'getAllUserAcc');
   }

   getUserData()
   {
    //let url = 'https://jsonplaceholder.typicode.com/todos/';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("username",this.showName);
    //this.http.get(this.appService.url+'getAccountsForUser',{params:queryParams});
    return this.http.get(this.url+'getAccountsForUser',{params:queryParams});
   }
    
}
