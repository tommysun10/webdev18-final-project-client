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
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		role: "",
	};
	curUser = {
		role: "",
	}
	editMode = false;

	constructor(private router: Router, private userService: UserServiceClient) { }

	updateUser(user) {
		this.editMode = true;
		this.newUser = user;
	}

	saveUser() {
		if (this.newUser.username == "") {
			alert("Username cannot be blank");
			window.location.reload();
			return;
		}

		if (this.newUser.password == "") {
			alert("Password cannot be blank");
			window.location.reload();
			return;
		}
		this.editMode = false;
		this.userService.updateUser(this.newUser)
		.then( () => this.emptyFields());
	}

	createUser() {
		if (this.newUser.username == "") {
			alert("Username cannot be blank");
			return;
		}

		if (this.newUser.password == "") {
			alert("Password cannot be blank");
			return;
		}

		this.userService.createUser(this.newUser).then(() => {
			this.userService
			.findAllUsers()
			.then(users => this.users = users)
			.then ( () => this.emptyFields());
		})
	}

	emptyFields() {
		this.newUser = {
			username: "",
			password: "",
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			role: "",
		};
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
		.then (()=> this.userService.currentUser() 
			.then ((cur) => this.curUser = cur))
	}

}
