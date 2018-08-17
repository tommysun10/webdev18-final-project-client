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
  user: {username:''};

  constructor(private userService: UserServiceClient,
  	private router: Router,
    private constants: Constants) {
    this.update();}

    logout() {
      this.constants.isLoggedIn = false;
      this.userService.logout();
    }

    update() {
      this.userService.currentUser()
      .then(user => this.user = user)
      .then(() => {if (this.user.username) {
        this.isLoggedIn = true;
      }})
    }


    ngOnInit() {
      this.update();

  }