import { Component, Input } from '@angular/core';
@Component({
 selector: 'tweet-frame',
 templateUrl: 'app/components/tweet/tweet.html',
})

export class Tweet {
    @Input() public tweets;
    @Input() public thisUser;
    @Input() public starStatus;      

    public addComment(commentInput: HTMLInputElement, index: number){
        commentInput.value.trim();
        if(commentInput.value != "")
        {
            this.tweets[index].comments.push(new Comment());
            var i = this.tweets[index].comments.length - 1;
            this.tweets[index].comments[i].userName = this.thisUser.userName;
            this.tweets[index].comments[i].commentText = commentInput.value;            
        }

        commentInput.value = "";
    }  
    public handleFavorite(index: number, star: HTMLSpanElement){
        if(this.thisUser.favoriteTweets.indexOf(this.tweets[index]) && star.classList.contains("glyphicon-star-empty"))  
        {                         
            this.thisUser.favoriteTweets.push(this.tweets[index]);
            star.classList.remove("glyphicon-star-empty");
            star.classList.add("glyphicon-star");
        }
        else
        {
            var i = this.thisUser.favoriteTweets.indexOf(this.tweets[index])
            this.thisUser.favoriteTweets.splice(i,1);
            star.classList.remove("glyphicon-star");
            star.classList.add("glyphicon-star-empty");          
        }
    }
}