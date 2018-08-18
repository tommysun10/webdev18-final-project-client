import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Constants} from "../common/constants"
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isLoggedIn: boolean;
  isAdmin : boolean;
  user: {
    username:"",
    role:"",
  };

  constructor(private userService: UserServiceClient,
  	private router: Router,
    private constants: Constants) {
    this.update();}

    logout() {
      this.userService.logout();
      this.router.navigate(['login'])
      .then( () => window.location.reload());
    }

    update() {
      this.userService.currentUser()
      .then(user => this.user = user)
      .then(() => {
        if (this.user.username) {
          this.isLoggedIn = true;
        } 
        if (this.user.role.valueOf() == "ADMIN".valueOf()) {
          this.isAdmin = true;
        }


      })
    }


    ngOnInit() {
      this.update();

    }
  }