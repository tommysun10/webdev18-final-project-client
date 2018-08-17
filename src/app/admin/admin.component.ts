import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users = [];
  newUser = {
  };

  constructor(private router: Router, private userService: UserServiceClient) { }

  updateUser(user) {
    this.newUser = user;
  }

  saveUser() {
    this.userService.updateUser(this.newUser)
    	.then( () => this.emptyFields());
  }

  createUser() {
    this.userService.createUser(this.newUser).then(() => {
      this.userService
        .findAllUsers()
        .then(users => this.users = users)
        .then ( () => this.emptyFields());
    })
  }

  emptyFields() {
  	this.newUser = {};
  }

  deleteUser(user) {
    this.userService.deleteUser(user.id);
    this.userService
      .findAllUsers()
      .then(users => this.users = users)
      .then(() => window.location.reload());
  }

  ngOnInit() {
    this.userService
      .findAllUsers()
      .then(users => this.users = users)
  }

}
