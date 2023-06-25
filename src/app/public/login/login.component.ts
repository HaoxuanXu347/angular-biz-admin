import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../public.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    console.log(this.form.getRawValue())

    // this.http.post(`${environment.api}/login`, this.form.getRawValue(), {
    //   withCredentials:true
    // })
    //   .subscribe(
    //   res => {
    //     console.log(res)
    //   }
    // )
    this.http.post(`${environment.api}/login`, this.form.getRawValue(), {
      withCredentials:true
    })
      .subscribe(
        () => {
          this.router.navigate(['']);
        }
      )
  }

}
