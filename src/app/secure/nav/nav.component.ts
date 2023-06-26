import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input('user') user: User|null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.authService.user().subscribe((user: User) => {
    //   console.log(user)
    //   this.user = user;
    // })

    // this.authService.user().subscribe(
    //   user=>this.user=user
    // );
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      console.log('success');
    });
  }

}
