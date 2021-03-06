import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import {UserServiceClient} from "./services/user.service.client";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { Constants } from './common/constants';
import { HomeComponent } from './home/home.component';
import { CuisineServiceClient } from './services/cuisine.service.client';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeServiceClient } from './services/recipe.service.client';
import { RecipeMakerComponent } from './recipe-maker/recipe-maker.component';
import { YoutubeServiceClient } from './services/youtube.service.client';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';

@NgModule({
	declarations: [
	AppComponent,
	AdminComponent,
	LoginComponent,
	ProfileComponent,
	RegisterComponent,
	HomeComponent,
	NavbarComponent,
	RecipeMakerComponent,
	RecipeComponent,
	RecipeEditorComponent

	],
	imports: [
	BrowserModule,
	FormsModule,
	HttpModule,
	routing
	],
	providers: [
	Constants, 
	UserServiceClient, 
	CuisineServiceClient, 
	RecipeServiceClient,
	YoutubeServiceClient
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
