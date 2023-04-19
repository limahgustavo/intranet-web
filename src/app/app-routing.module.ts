import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PointComponent} from "./point/ponto.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {TlconsultaComponent} from "./consult/consult.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'point', component: PointComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'consult', component: TlconsultaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
