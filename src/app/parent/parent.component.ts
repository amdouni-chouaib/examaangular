import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(private route:Router,private routs:ActivatedRoute){}

// navi1(){
// // this.route.navigate(['/chone/50'])
// //this.route.navigateByUrl(`/chone/${50}`)   // localhost:4200/chone/50


// console.log(this.routs.snapshot.params['id'])
// }
// navi2(){
//   // this.route.navigate(['/chone'])

//   this.route.navigateByUrl(`/chtwo`)   // localhost:4200/chtwo

// }
sub(data:any){
  console.log(data)
}

}
