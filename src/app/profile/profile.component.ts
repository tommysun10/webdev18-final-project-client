import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {};
  sections = {};

  constructor(private router: Router, private userService: UserServiceClient, private route: ActivatedRoute) { }

  updateUser() {

    this.userService.updateUser(this.user).then(() => {
      return this.userService.currentUser();
    })
      .then(user => this.user = user);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  goToAdminPage(role) {
    if (role == 'admin') {
      this.router.navigate(['admin']);
    }
    else {
      alert("You are not an admin. Please log in with admin credentials");
    }
  }

  ngOnInit() {
    this.userService.currentUser()
      .then(user =>
        this.user = user)
    };

}
