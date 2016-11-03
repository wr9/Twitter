import { Component } from '@angular/core';
@Component({
 selector: 'my-app',
 template: `
                <h1>Twitter!!!</h1> 
                <navbar></navbar>

                <div class="col-lg-6">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Tweet here!" #tweetInput/>
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button" (click)="addTweet(tweetInput)">Tweet</button>
                        </span>
                    </div>
                </div>

                <tweet-frame [thisUser]="getThisUser()" [tweet]="getText(i)" [user]="getUser(i)" *ngFor="let tweet of tweets; let i = index"></tweet-frame>
            `
})

export class AppComponent {
    private tweets: Tweet[];
    private user: User;
  
    constructor(){
        this.tweets = [
            new Tweet("Hello world!", new User("Mate Matic")),
            new Tweet("I am a tweet!", new User("Miljenko Milic"))
        ];
        this.user = new User("Moj Profil");
    }

    public getUser(index: number){
        return this.tweets[index].getUserName();
    }
    public getText(index: number){
        return this.tweets[index].getText();
    }
    public getThisUser(){
        return this.user.userName;
    }
    public addTweet(tweetInput: HTMLInputElement){ 
        if(tweetInput.value != "")
            this.tweets.push(new Tweet(tweetInput.value, this.user));
        tweetInput.value="";
  }
 }

 class Tweet {
    private user: User;
    private text: string;
  
    constructor(text: string, user: User){
        if(text.length <= 140)
        {
            this.text = text;
            this.user = user;
        }
    }

    public getUserName(){
        return this.user.userName;
    }

    public getText(){
        return this.text;
    }
}

class User {
    public userName: string;
    constructor(userName: string){
        this.userName = userName;
    }
}