import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  login = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    this.userService.login(user).then(response => {
        if (response.status == 200) {
          this.router.navigate(['profile']);
        }
        else {
          alert('invalid credentials');
        }
      })
  }

  ngOnInit() {
  }

}
