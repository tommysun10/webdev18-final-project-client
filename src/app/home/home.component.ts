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
  newCuisine = {
    title:''
  }; 
  recipes = []; 
  newRecipe = {title: String};
  loggedIn = false; 
  user = {
    role: ""
  }
  create = true;
  recipeTitle = ""; 


  constructor(private router: Router,  private userService: UserServiceClient, private recipeService: RecipeServiceClient, private cuisineService: CuisineServiceClient) { }

  createCuisine() {
    if (this.newCuisine.title == '') {
      alert("Please Enter Cuisine Name");
      return;
    }
    this.cuisineService.createCuisine(this.newCuisine).then(res => {
      this.cuisineService.getCuisines().then(res => this.cuisines = res)
    })
    this.newCuisine = {title:''};
  }

  searchRecipe() {
      this.recipeService.getRecipesForCuisine(this.selectedCuisine.id).then(recipes =>  {
        this.recipes = recipes.filter(recipe => recipe.title.includes(this.recipeTitle));
      })
  }

  selectCuisine(cuisine) {
    this.selectedCuisine = cuisine; 
    this.recipeService.getRecipesForCuisine(cuisine.id).then(recipes => this.recipes = recipes);
  }

  createRecipe() {
    this.router.navigate(['recipe-create', {cid: this.selectedCuisine.id}])
  }

  deleteCuisine(cuisine) {
    this.cuisineService.deleteCuisine(cuisine.id)
      .then(() => this.cuisineService.getCuisines()
        .then(cuisines => this.cuisines = cuisines)
        .then( () => window.location.reload()));
  }

  viewRecipe(recipe) {
     this.router.navigate(['recipe', {rid: recipe.id}]);
  }

  editCuisine(cuisine) {
  	this.create = false;
  	this.newCuisine = cuisine;
  }

  updateCuisine() {
  	this.cuisineService.updateCuisine(this.newCuisine)
  		.then(() => this.cuisineService.getCuisines()
  			.then(cuisines => this.cuisines = cuisines));
  	this.create = true;
  	this.newCuisine = {title:""};
  }

  editRecipe(recipe) {
  	this.router.navigate(['recipe-editor',{rid: recipe.id}]);
  }

  ngOnInit() {
    this.cuisineService.getCuisines().then(res => this.cuisines = res)
    .then(() => this.userService.currentUser()
      .then(user => this.user = user));
  }

}
