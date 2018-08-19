import { Component, OnInit } from '@angular/core';
import { RecipeServiceClient } from '../services/recipe.service.client';
import { Router, ActivatedRoute } from "@angular/router";
import { YoutubeServiceClient } from '../services/youtube.service.client';

@Component({
	selector: 'app-recipe-editor',
	templateUrl: './recipe-editor.component.html',
	styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent implements OnInit {
	recipe: {
		description: "",
		title: '',
		ingredients: String[],
		youtubeUrl: "",
		imageUrl: ""
	};
	search = '';
	ingredients = "";
	selectedVideo: {
		id: {
			videoId: "",
		},

		snippet: {
			title: "",
			thumbnails: {
				default: {
					url: ""
				},
			}
		}
	}
	youtube: {
		items: [""],
		search: ""
	}
	videos = [];
	chef = {
		username: "",
	};

	constructor(private recipeService: RecipeServiceClient,
		private router: Router,
		private aRoute: ActivatedRoute,
		private youtubeService: YoutubeServiceClient, ) { }

	selectVideo(video) {
		this.selectedVideo = video;
	}

	updateRecipe() {
		this.recipe.ingredients = this.ingredients.split("\n");
		if (this.selectedVideo) {
			this.recipe.youtubeUrl = this.selectedVideo.id.videoId;
			this.recipe.imageUrl = this.selectedVideo.snippet.thumbnails.default.url;
		}

		if (this.recipe.title == "") {
			alert("Title is required");
			return;
		}

		this.recipeService.updateRecipe(this.recipe)
			.then(() => this.router.navigate(['home']));

	}

	deleteRecipe() {
		this.recipeService.deleteRecipe(this.aRoute.snapshot.paramMap.get('rid'))
			.then(() => this.router.navigate(['home']));
	}

	searchYoutube() {
		this.youtubeService.getYoutubeObject(this.search)
			.then(response => this.youtube = response)
			.then(() => this.videos = this.youtube.items)
	}

	ngOnInit() {
		var ingredientsArray = [];
		var recipeId = +this.aRoute.snapshot.paramMap.get('rid')
		this.recipeService.getRecipe(recipeId)
			.then(recipe => {
				this.recipe = recipe;
				for (let s of recipe.ingredients) {
					this.ingredients += s;
					this.ingredients += "\n";
				}
				ingredientsArray = this.ingredients.split('undefined');
				this.ingredients = ingredientsArray[0];
				this.recipeService.getChef(recipeId).then(chef => {
					this.chef = chef;
					
				})
			}
		);
}
}
