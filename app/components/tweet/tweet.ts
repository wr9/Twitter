import { Component } from '@angular/core';
@Component({
 selector: 'tweet',
 templateUrl: 'app/components/tweet/tweet.html',
})
export class Tweet {
    private isLiked: boolean = false;

    private changeLike(){
        this.isLiked = !this.isLiked;
    }
 }