import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log({
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm,
    });

    // this.http.post('http://localhost:8080/api/register', {
    //   first_name: this.firstName,
    //   last_name: this.lastName,
    //   email: this.email,
    //   password: this.password,
    //   password_confirm: this.passwordConfirm,
    // }).subscribe(res=>{
    //   console.log(res);
    // })

    // redirect to login

    // this.http.post('http://localhost:8080/api/register', {
    this.http.post(`${environment.api}/register`, {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm,
    }).subscribe(() =>{
      this.router.navigate(['/login'])
    })
  }
}
