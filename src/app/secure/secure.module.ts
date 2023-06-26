import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import {NavComponent} from "./nav/nav.component";
import {MenuComponent} from "./menu/menu.component";
import { ProfileComponent } from './profile/profile.component';
import {RouterOutlet} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    ProfileComponent,
    DashboardComponent
  ],
  exports: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecureModule { }
