import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Navbar } from './components/navbar/navbar';
import { LoginForm } from './components/loginForm/loginForm';
import { RegisterForm } from './components/registerForm/registerForm';

@NgModule({
 imports: [ BrowserModule, NgbModule.forRoot()],
 declarations: [ AppComponent, Navbar, LoginForm,RegisterForm ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }