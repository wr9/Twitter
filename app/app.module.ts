import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Navbar } from './components/navbar/navbar';
import { LoginForm } from './components/loginForm/loginForm';
import { RegisterForm } from './components/registerForm/registerForm';
import { EditProfile } from './components/editProfile/editProfile';
import { routing } from './app.routes';
import { Tweet } from './components/tweet/tweet';
import { MainPage } from './components/mainPage/mainPage';
import { SearchForm } from './components/searchForm/searchForm';
import { UserCover } from './components/userCover/userCover';

@NgModule({
 imports: [ BrowserModule, NgbModule.forRoot(), routing],
 declarations: [ 
                    AppComponent, 
                    Navbar, 
                    LoginForm, 
                    RegisterForm, 
                    EditProfile, 
                    Tweet, 
                    MainPage, 
                    SearchForm,
                    UserCover
                ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }