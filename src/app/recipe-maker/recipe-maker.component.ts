import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {RecipeServiceClient} from '../services/recipe.service.client';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-recipe-maker',
  templateUrl: './recipe-maker.component.html',
  styleUrls: ['./recipe-maker.component.css']
})
export class RecipeMakerComponent implements OnInit {
	cuisineId = -1;
	recipe = {
		title: '',
		description: '',
		user: {},
		ingredients: [],
		imageURL: '',
		youtubeVideo: '',

	};
	user = {username:''};
	ingredients = '';
	youtube = {
		imageURL: '',
		video: '',
	};

  constructor(private userService: UserServiceClient,
  	private recipeService: RecipeServiceClient,
  	private router: Router,
  	private aRoute: ActivatedRoute) { }

  createRecipe() {
  	this.recipe.ingredients = this.ingredients.split("\n");

  	this.recipeService.createRecipe(this.cuisineId, this.recipe)
  		.then(() => this.router.navigate(['home']));

  }

  ngOnInit() {
  	this.userService.currentUser()
  		.then(user => this.user = user)
  			.then(()=> {
  				this.recipe.user = this.user.username;
  			})
  			.then(() => this.cuisineId = this.aRoute.snapshot.paramMap.get('cid')
  				)
  }

}
