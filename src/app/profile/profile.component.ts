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

  user = {
  	username: "",
  	firstName: "",
  	lastName: "",
  	email: "",
  	role: ""
  };
  sections = {};
  recipesLiked = []; 
  recipesOwned = [];
  followers = []; 
  following = []; 
  isCurrentUser = false; 
  isChef = false; 

  constructor(private router: Router, 
    private userService: UserServiceClient, 
    private route: ActivatedRoute) { }

  updateUser() {
    this.userService.updateUser(this.user).then(() => {
      return this.userService.currentUser();
    })
      .then(user => this.user = user)
      .then(()=> alert("Update Successful"));
  }

  follow(userId) {
    this.userService.follow(userId).then(user => {
      this.userService.getFollowers(userId).then(followers => this.followers = followers);
  })
  }

  unfollow(userId) {
    event.stopPropagation();
    this.userService.unfollow(userId).then(user => {
      this.userService.getFollowing(userId).then(following => this.following = following);
  })
  }

  unlike(userId, recipeId) {
    event.stopPropagation();
    this.userService.unlikeRecipe(recipeId).then(res => {
      this.userService.getRecipesLiked(userId).then(recipesLiked => this.recipesLiked = recipesLiked); 
    })
  }

  viewRecipe(recipe) {
    this.router.navigate(['recipe', {rid: recipe.id}]);
 }

 editRecipe(recipeId) {
  event.stopPropagation();
  this.router.navigate(['recipe-editor',{rid: recipeId}]);
 }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
    window.location.reload();
  }

  goToProfile(userId) {
    this.router.navigate(['profile', {uid: userId}]);
    window.location.reload();
  }

  ngOnInit() {
    var userId = +this.route.snapshot.paramMap.get('uid');
    if (userId > 0) {
      this.userService.currentUser()
      .then(user => { 
        if (user.id == userId) {
          this.isCurrentUser = true; 
        }
      }); 
      this.userService.findUserById(userId).then(user => {
        this.user = user; 
        this.userService.getFollowing(userId).then(following => this.following = following); 
        this.userService.getFollowers(userId).then(followers => this.followers = followers); 
        this.userService.getRecipesLiked(userId).then(recipesLiked => this.recipesLiked = recipesLiked); 
      }) 
    } 
    else {
      this.isCurrentUser = true; 
      this.userService.currentUser()
      .then(user => {
        this.user = user; 
        this.userService.getFollowing(user.id).then(following => this.following = following); 
        this.userService.getFollowers(user.id).then(followers => this.followers = followers); 
        this.userService.getRecipesLiked(user.id).then(recipesLiked => this.recipesLiked = recipesLiked); 
        this.userService.getRecipesOwned(user.id).then(recipesOwned => {
          this.recipesOwned = recipesOwned; 
          this.isChef = this.user.role=="PRO";
          console.log("is chef = " + this.isChef);
      })
    });
    }
  }
}
