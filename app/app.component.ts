import { Component } from '@angular/core';
@Component({
 selector: 'my-app',
 template: `
                <h1>Twitter!!!</h1> 
                <navbar></navbar>

                <div class="col-lg-6">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Tweet here!" #tweetInput (keyup.enter)="addTweet(tweetInput)"/>
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button" (click)="addTweet(tweetInput)">Tweet</button>
                        </span>
                    </div>
                </div>
                
                <h2>Favorites</h2>
                <tweet-frame [tweets]="getThisUserFavoriteTweets()" [thisUser]="getThisUser()"></tweet-frame>
                <h2>Other Tweets</h2>
                <tweet-frame [tweets]="getThisUserTweets()" [thisUser]="getThisUser()"></tweet-frame>
                <tweet-frame    [tweets]="getAllTweets(i)" 
                                [thisUser]="getThisUser()"
                                *ngFor="let user of otherUsers, let i  = index">
                <tweet-frame>
                
            `
})

export class AppComponent {
    private currentUser: User;
    private otherUsers: User[];

    constructor(){
        this.currentUser = new User("Moj profil");
        this.otherUsers = [new User("User1"), new User("User2")];

        var user1Tweets = this.otherUsers[0].getUserTweets();
        var user2Tweets = this.otherUsers[1].getUserTweets();
        user1Tweets.push(new Tweet("User1 tweet #1", this.otherUsers[0].getUserName()));
        user1Tweets.push(new Tweet("User1 tweet #2", this.otherUsers[0].getUserName()));
        user1Tweets.push(new Tweet("User2 tweet #1", this.otherUsers[1].getUserName()));
        user1Tweets.push(new Tweet("User2 tweet #2", this.otherUsers[1].getUserName()));
        var user1Tweet2Coments = user1Tweets[1].getComments();
        user1Tweet2Coments.push(new Comment("test comment user 1, tweet 2", this.otherUsers[1].getUserName()));

        var tweets = this.currentUser.getUserTweets();
        tweets.push(new Tweet("Moj Tweet #1", this.currentUser.getUserName()));
        tweets.push(new Tweet("Moj Tweet #2", this.currentUser.getUserName()));
        tweets.push(new Tweet("Moj Tweet #3", this.currentUser.getUserName()));

        var comments = tweets[1].getComments();
        comments.push(new Comment("test comment #1", this.currentUser.getUserName()));
        comments.push(new Comment("test comment #2", this.currentUser.getUserName()));
        comments = tweets[2].getComments();
        comments.push(new Comment("test 123", this.currentUser.getUserName()));

        var myStars = this.currentUser.getStarts();
        for(let i = 0; i < this.otherUsers.length; i++)
        {
            var otherUsersTweets = this.otherUsers[i].getUserTweets();
            for(let j = 0; j < otherUsersTweets.length; j++)
                myStars.push(false);
        }
    }

    public getThisUser(){
        return this.currentUser;
    }
    public getAllTweets(index: number){
        if(this.otherUsers.length > 0)        
            return this.otherUsers[index].getUserTweets();
    }
    public getThisUserTweets(){
        return this.currentUser.getUserTweets();
    }
    public getThisUserFavoriteTweets(){
        return this.currentUser.getFavoriteTweets();
    }
    public addTweet(tweetInput: HTMLInputElement){
        if(tweetInput.value != "")
        {
            var currentUserTweets = this.currentUser.getUserTweets();
            currentUserTweets.push(new Tweet(tweetInput.value, this.currentUser.getUserName()));
        }
        tweetInput.value="";
    }
 }

class User {
    private userName: string;
    private tweets: Tweet[];
    private stars: boolean[];
    private favoriteTweets: Tweet[];

    constructor(userName: string, tweets: Tweet[] = [], stars: boolean[] = [], favoriteTweets: Tweet[] = []){
        this.userName = userName;
        this.tweets = tweets;
        this.stars = stars;
        this.favoriteTweets = favoriteTweets;
    }

    public getUserTweets(){
        return this.tweets;
    }
    public getFavoriteTweets(){
        return this.favoriteTweets;
    }
    public getUserName(){
        return this.userName;
    }
    public getStarts(){
        return this.stars;
    }
}

class Tweet{
    private tweet: string;
    private userName: string;
    private comments: Comment[];

    constructor(tweet: string, userName: string, comments: Comment[] = []){
        this.tweet = tweet;
        this.userName = userName;
        this.comments = comments;
    }

    public getTweet(){
        return this.tweet;
    }
    public getComments(){
        return this.comments;
    }
}

class Comment{
    private commentText;
    private userName;

    constructor(commentText: string = "", userName: string = ""){
        this.commentText = commentText;
        this.userName = userName;
    }
    
    public getCommentUser(){
        return this.userName;
    }
    public getCommentText(){
        return this.commentText;
    }
}