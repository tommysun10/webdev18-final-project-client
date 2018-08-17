import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RecipeMakerComponent} from './recipe-maker/recipe-maker.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'home', component: HomeComponent},
  { path: 'recipe/create', component: RecipeMakerComponent},
  { path: '**', component: HomeComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
