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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Constants, UserServiceClient, CuisineServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
