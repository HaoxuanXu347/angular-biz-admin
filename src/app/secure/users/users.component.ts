import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  page = 1;
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.all().subscribe(res=> this.users = res.data);
  }


  delete(id:number):void {
  }
}
