import { Component } from '@angular/core';
@Component({
 selector: 'main-page',
 templateUrl: 'app/components/mainPage/mainPage.html',
})

export class MainPage {
    private currentUser: User;
    private otherUsers: User[];

    constructor(){
        this.currentUser = new User("Moj profil");
        this.otherUsers = [new User("User1")];

        var user1Tweets = this.otherUsers[0].getUserTweets();
        user1Tweets.push(new Tweet("User1 test tweet", this.otherUsers[0].getUserName()));
        var user1Tweet1Coments = user1Tweets[0].getComments();
        user1Tweet1Coments.push(new Comment("User1 test komentar", this.otherUsers[0].getUserName()));

        var tweets = this.currentUser.getUserTweets();
        tweets.push(new Tweet("Moj Prvi Tweet", this.currentUser.getUserName()));

        var comments = tweets[0].getComments();
        comments.push(new Comment("Moj test komentar", this.currentUser.getUserName()));
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
    private favoriteTweets: Tweet[];

    constructor(userName: string, tweets: Tweet[] = [], favoriteTweets: Tweet[] = []){
        this.userName = userName;
        this.tweets = tweets;
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
}