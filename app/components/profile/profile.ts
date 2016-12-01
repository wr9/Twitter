import { Component } from '@angular/core';
@Component({
 selector: 'profile',
 templateUrl: 'app/components/profile/profile.html',
})
export class Profile {
    private isInTweetMode: boolean = true;

    private goToTweet(){
        this.isInTweetMode = true;
    }

    private goToLike(){
        this.isInTweetMode = false;
    }
}