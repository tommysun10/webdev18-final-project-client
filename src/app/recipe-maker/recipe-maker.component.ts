import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {RecipeServiceClient} from '../services/recipe.service.client';
import { Router, ActivatedRoute } from "@angular/router";
import {YoutubeServiceClient} from '../services/youtube.service.client';
import { Constants} from '../common/constants';


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
    imageUrl: '',
    youtubeUrl: '',

  };
  user = {username:''};
  ingredients = '';

  youtube = {
    search: '',
    API: {
      items:{},
    },
  };

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

  videos: {};

  constructor(private userService: UserServiceClient,
  	private recipeService: RecipeServiceClient,
  	private router: Router,
  	private aRoute: ActivatedRoute,
    private youtubeService: YoutubeServiceClient,
    private constants: Constants) { }

  createRecipe() {
  	this.recipe.ingredients = this.ingredients.split("\n");
    this.recipe.youtubeUrl = this.selectedVideo.id.videoId;
    this.recipe.imageUrl = this.selectedVideo.snippet.thumbnails.default.url;

console.log(this.recipe);

    this.recipeService.createRecipe(this.cuisineId, this.recipe)
    .then(() => this.router.navigate(['home']));
  }

  searchYoutube() {
    this.youtubeService.getYoutubeObject(this.youtube.search)
    .then(response => this.youtube.API = response)
    .then(() => this.videos = this.youtube.API.items)
  }

  selectVideo(video) {
    this.selectedVideo = video;
  }

  ngOnInit() {
  	this.userService.currentUser()
    .then(user => this.user = user)
    .then(()=> {
      this.recipe.user = this.user.username;
    })
    .then(() => this.cuisineId = +this.aRoute.snapshot.paramMap.get('cid')
      )
  }

}
