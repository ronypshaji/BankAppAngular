import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  url = `http://httpbin.org/post`;
  postData = {
    test: 'my content',
  };


  samplePostData()
  {
    debugger;
    {
        this.http.post<any>(this.url, this.postData).subscribe({
             next: data => {
               console.log(data);
               console.log(JSON.parse(data.data));
            },
            error: error => {
                //this.errorMessage = error.message;
              console.error('There was an error!', error);
          }
       })
  }
}

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
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(url);
   }
    
}
