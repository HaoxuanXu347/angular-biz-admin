import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecureComponent} from "./secure/secure.component";
import {LoginComponent} from "./public/login/login.component";
import {RegisterComponent} from "./public/register/register.component";
import {PublicComponent} from "./public/public.component";

// 1. routes
// const routes: Routes = [
//   {path: '', component: SecureComponent},
//   {path: 'login', component:LoginComponent},
//   {path: 'register', component:RegisterComponent}
// ];

const routes: Routes = [
  {path: '', component: SecureComponent},
  {
    path: '', component: PublicComponent,
    children: [
      {path: 'login', component:LoginComponent},
      {path: 'register', component:RegisterComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
