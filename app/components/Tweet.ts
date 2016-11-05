import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
 selector: 'tweet-frame',
 template: `
                <div class="panel panel-default"  *ngFor="let tweet of tweets, let i = index">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{tweets[i].userName}}</h3>
                    </div>

                    <div class="panel-body">
                        {{tweets[i].tweet}}   
                        <span   [ngClass]="getUserStar()" 
                                aria-hidden="true" 
                                #star 
                                (click)="handleFavorite(i, star)"
                                >
                        </span>                 
                        <div class="panel panel-default" *ngFor="let comment of tweets[i].comments, let j = index">
                            <div class="panel-heading">
                                <h5 class="panel-title">{{tweets[i].comments[j].userName}}</h5>
                            </div>
                            <div class="panel-body">
                                <h6>{{tweets[i].comments[j].commentText}}</h6>
                            </div>
                        </div>
                    </div>                 
                    
                    <div class="col-lg-6">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Comment..." #commentInput (keyup.enter)="addComment(commentInput, i)"/>
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" (click)="addComment(commentInput, i)">Comment</button>
                            </span>
                        </div>
                    </div>
                </div>
            `
})

export class Tweet {
    @Input() public tweets;
    @Input() public thisUser;      

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
    public getUserStar(){
        
    }
    public handleFavorite(index: number, star: HTMLSpanElement){
        if(star.classList.contains("glyphicon-star-empty")){            
            this.thisUser.favoriteTweets.push(this.tweets[index]);
            star.classList.remove("glyphicon-star-empty");
            star.classList.add("glyphicon-star");
        }
        else{

        }
    }
}