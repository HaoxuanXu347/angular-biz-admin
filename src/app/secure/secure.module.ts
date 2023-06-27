import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import {NavComponent} from "./nav/nav.component";
import {MenuComponent} from "./menu/menu.component";
import { ProfileComponent } from './profile/profile.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    ProfileComponent,
    DashboardComponent,
    UsersComponent
  ],
  exports: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SecureModule { }
