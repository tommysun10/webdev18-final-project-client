import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router"
import { RecipeServiceClient } from '../services/recipe.service.client';
import { UserServiceClient } from '../services/user.service.client';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe = {}; 
  cuisine = 'Asian Fusion';
  videoSrc = '';
  user = {
    username: 'dana',
  }

  usersLiked = []; 

  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceClient, private userService: UserServiceClient) { }

  likeRecipe(likedRecipe) {
    this.userService.likeRecipe(likedRecipe.id).then(resp => {
      this.recipeService.getRecipe(likedRecipe.id).then(recipe => this.recipe = recipe); 
    })
  }

  ngOnInit() {
     var recipeId = +this.route.snapshot.paramMap.get('rid');
    this.recipeService.getRecipe(recipeId).then(recipe => {
      this.recipe = recipe; 
      this.videoSrc = recipe.youtubeUrl;
      console.log(this.videoSrc);
    })

    this.recipeService.getRecipeLikes(recipeId).then(usersLiked => this.usersLiked = usersLiked)
  }

}
