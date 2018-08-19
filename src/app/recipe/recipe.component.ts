import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { RecipeServiceClient } from '../services/recipe.service.client';
import { UserServiceClient } from '../services/user.service.client';


@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
	recipeId = -1;
	recipe = {
		likes: [],
		chef: {
			id: -1,
		}
	};
	curUser: {
		username: '';
	};

	constructor(
		private route: ActivatedRoute,
		private recipeService: RecipeServiceClient,
		private userService: UserServiceClient,
		private router: Router) { }

	likeRecipe(likedRecipe) {
		if (this.curUser.username !== '') {
			this.userService.likeRecipe(likedRecipe.id)
				.then(() => {
					this.recipeService.getRecipeLikes(likedRecipe.id)
						.then(likes => this.recipe.likes = likes);
				}); 
		} else {
			this.router.navigate(['login']);
		}
	}

	goToChef() {
		return this.router.navigate(['profile', { uid: this.recipe.chef.id }])
	}

	ngOnInit() {
		this.recipeId = +this.route.snapshot.paramMap.get('rid');
		this.recipeService.getRecipe(this.recipeId)
			.then(recipe => this.recipe = recipe)
			.then(() =>
				this.recipeService.getRecipeLikes(this.recipeId)
					.then(likes => this.recipe.likes = likes))
			.then(() => this.recipeService.getChef(this.recipeId)
				.then(chef => this.recipe.chef = chef))
			.then(() => this.userService.currentUser()
				.then(user => this.curUser = user));

	}
}