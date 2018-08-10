import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from "../services/user.service.client";
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: String;
  password1: String;
  password2: String;

  constructor(private router: Router,
    private userService: UserServiceClient) { }

  register = (username, password1, password2) => {
    if (password1 != password2) {
      alert("Passwords don't match");
    }
    else {
      const newUser = {
        username: username,
        password1: password1,
        password2: password2,
      };
      this.userService.register(newUser)
        .then(u => {
          if (u.status == 412) {
            alert("Username is already taken");
          }
          else if (u.status == 200) {
            var user = {
              username: newUser.username,
              password: newUser.password1,
            }
            this.userService.login(user).then(response => {
                this.router.navigate(['profile']);
            })
          }
        })
    }
  }

  ngOnInit() {

  }
}
