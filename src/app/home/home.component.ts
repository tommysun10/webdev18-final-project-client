import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { UserServiceClient } from '../services/user.service.client';
import { CuisineServiceClient } from '../services/cuisine.service.client';
import { RecipeServiceClient } from '../services/recipe.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuisines = [];
  selectedCuisine = {
    id:''
  };
  newCuisine = {}; 
  recipes = {}; 
  newRecipe = {title: String};
  loggedIn = false; 


  constructor(private router: Router,  private userService: UserServiceClient, private recipeService: RecipeServiceClient, private cuisineService: CuisineServiceClient) { }

  createCuisine() {
    this.cuisineService.createCuisine(this.newCuisine).then(res => {
      this.cuisineService.getCuisines().then(res => this.cuisines = res)
    })
  }

  selectCuisine(cuisine) {
    this.selectedCuisine = cuisine; 
    this.recipeService.getRecipesForCuisine(cuisine.id).then(recipes => this.recipes = recipes);
  }

  createRecipe() {
    this.router.navigate(['recipe-create', {cid: this.selectedCuisine.id}])
  }

  ngOnInit() {
    this.cuisineService.getCuisines().then(res => this.cuisines = res)
  }

}
