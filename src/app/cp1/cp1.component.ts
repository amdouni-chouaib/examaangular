import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.css']
})
export class Cp1Component {
constructor(private route:ActivatedRoute){}

test(){
  alert(this.route.snapshot.params["id"])  
}


}
