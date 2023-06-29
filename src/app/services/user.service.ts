import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService{
  endpoint = `${environment.api}/users`;
}
