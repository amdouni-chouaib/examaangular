import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Cp1Component } from './cp1/cp1.component';
import { Cp2Component } from './cp2/cp2.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = 
[
  
  {
    path:'parent',component:ParentComponent
  },
    
      {
        path:'chone',component:Cp1Component
      },
      {
        path:'chtwo',component:Cp2Component
      }
    ,
  {path:"",redirectTo:"parent",pathMatch:"full"},

  {
    path:"**",component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
