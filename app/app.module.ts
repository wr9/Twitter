import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Navbar } from './components/Navbar';

@NgModule({
 imports: [ BrowserModule, NgbModule.forRoot()],
 declarations: [ AppComponent, Navbar ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }