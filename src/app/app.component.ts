import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicetestService } from './servicetest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 name ={
  firstname:"ali",
  lastname:"latifa"
}

date = new Date()
num = 1.156


per = 0.5

constructor(private service:ServicetestService){}
  ngOnInit(): void {
    // this.service.getdata().subscribe(
    //   (data:any)=>{
    //   console.warn(data)
    //   }),((error:any)=>{
    //     console.log(error)
    //   })

    // console.log(this.service.getdata())
    // this.service.post(this.per)


  }





  // constructor(private active:ActivatedRoute){
  //   this.active.queryParams.subscribe((data:any)=>{
  //     console.log(data)
  //   })
  // }
  // title = 'exam';
  // formsubmit(data:any){
  //   console.log(data)

  // }


  title="chouaib"
}
