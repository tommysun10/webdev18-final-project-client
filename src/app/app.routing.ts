import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {RecipeComponent} from "./recipe/recipe.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'home', component: HomeComponent},
  { path: 'recipe/:recipeId', component: RecipeComponent},
  { path: '**', component: HomeComponent}



];

export const routing = RouterModule.forRoot(appRoutes);
