import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Navbar } from './components/Navbar';
import { Tweet } from './components/Tweet';
import { Comment } from './components/Comment';

@NgModule({
 imports: [ BrowserModule, NgbModule.forRoot()],
 declarations: [ AppComponent, Navbar, Tweet, Comment ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }