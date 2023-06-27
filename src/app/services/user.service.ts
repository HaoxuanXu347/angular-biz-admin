import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = `${environment.api}/users`;
  constructor(private http: HttpClient) { }

  all():Observable<any>{
    return this.http.get<any>(this.endpoint)
  }
}
