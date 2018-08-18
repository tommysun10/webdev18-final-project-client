import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../services/recipe.service.client';
import { Router, ActivatedRoute } from "@angular/router";
import {YoutubeServiceClient} from '../services/youtube.service.client';

@Component({
	selector: 'app-recipe-editor',
	templateUrl: './recipe-editor.component.html',
	styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent implements OnInit {
	recipe: {
		title: '',
		ingredients: [],
		youtubeUrl: "",
		imageUrl: ""
	};
	search: '';
	ingredients:'';
	selectedVideo: {
		id: {
			videoId:"",
		},

		snippet: {
			title:"",
			thumbnails: {
				default:{
					url:""
				},
			}
		}
	}
	youtube: {
		items:[]
	}
	videos:[]

	constructor(private recipeService: RecipeServiceClient,
		private router: Router,
		private aRoute: ActivatedRoute,
		private youtubeService: YoutubeServiceClient,) { }

	selectVideo(video) {
		this.selectedVideo = video;
	}

	updateRecipe() {
		this.recipe.ingredients = this.ingredients.split("\n");
		if (this.selectedVideo) {
			this.recipe.youtubeUrl = this.selectedVideo.id.videoId;
			this.recipe.imageUrl = this.selectedVideo.snippet.thumbnails.default.url;
		}

		this.recipeService.updateRecipe(this.recipe)
		.then(()=> this.router.navigate(['home']));

	}

	searchYoutube() {
		this.youtubeService.getYoutubeObject(this.search)
		.then(response => this.youtube = response)
		.then(() => this.videos = this.youtube.items)
	}

	ngOnInit() {
		this.recipeService.getRecipe(this.aRoute.snapshot.paramMap.get('rid'))
		.then(recipe => {
			this.recipe = recipe;
			for(let s of recipe.ingredients) {
				if (!this.ingredients) {
					this.ingredients = s;
				} else {
					this.ingredients += s;
				}
				this.ingredients += "\n";
			}
		});
	}
}
