import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicetestService {

  constructor(private http:HttpClient) { }
  
  
  // getdata(){
  //   return this.http.get("https://jsonplaceholder.typicode.com/todos/")
    
 
  //  }
  getdata(){
    const ali = this.http.get("https://jsonplaceholder.typicode.com/todos/").subscribe((data:any)=>{
        console.log(data)   
   })
   
   return ali

  }


  post(data:any){
    return this.http.post("path",data)
  }

puts(data:any,id:any){
    return this.http.put("path/"+id,data)
  }
  
}
