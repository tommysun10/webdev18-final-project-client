import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuisines = [];
  selectedCuisine = {};
  recipes = {}; 
  loggedIn = false; 

  constructor(private router: Router,  private userService: UserServiceClient) { }


  ngOnInit() {
 
  }

}
