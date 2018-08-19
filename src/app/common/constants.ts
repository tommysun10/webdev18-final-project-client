import {Injectable} from '@angular/core';

@Injectable()
export class Constants {
  BASE_API_URL = 'http://localhost:8080/api';
  // BASE_API_URL = 'https://webdev-final-proj-server.herokuapp.com/api';

  // User Based things
  PROFILE_URL = this.BASE_API_URL + '/profile';
  LOGIN_URL = this.BASE_API_URL + '/login';
  LOGOUT_URL = this.BASE_API_URL + '/logout';
  REGISTER_URL = this.BASE_API_URL + '/register';
  USER_URL = this.BASE_API_URL + '/user';

  // Admin things
  USERS_URL = this.BASE_API_URL + '/users';

  // Cuisine Services

  CUISINE_URL = this.BASE_API_URL + "/cuisine";
  RECIPE_URL = this.BASE_API_URL + "/recipe";

  // Youtube API 
  YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";
  YOUTUBE_URL_TWO= "&type=video&key=AIzaSyBy8LJmSegON_gEweoYnun1JwZbzaojYhs";
}
