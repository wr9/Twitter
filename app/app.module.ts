import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Navbar } from './components/navbar/navbar';
import { LoginForm } from './components/loginForm/loginForm';
import { RegisterForm } from './components/registerForm/registerForm';
import { routing } from './app.routes';

@NgModule({
 imports: [ BrowserModule, NgbModule.forRoot(), routing],
 declarations: [ AppComponent, Navbar, LoginForm, RegisterForm ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }