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
  lastPage:number;
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load(){
    this.userService.all(this.page).subscribe((res:any)=> {
      this.users = res.data
      this.lastPage = res.meta.last_page
      });
  }

  delete(id:number):void {
  }

  next(): void {
    if (this.page === this.lastPage) {
      return;
    }
    this.page++;
    this.load();
  }

  prev(): void {
    if (this.page === 1) {
      return;
    }
    this.page--;
    this.load();
  }
}
