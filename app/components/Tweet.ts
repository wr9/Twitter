import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
 selector: 'tweet-frame',
 template: `
                <ul class="media-list">
                    <li class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="" alt="">                         
                            </a>                            
                        </div>
                        <div class="media-body">
                            <h3>{{user}}</h3>
                            <h2>{{tweet}}</h2>
                        </div>                        
                        <comment [thisUser]="thisUser" [commentText]="getComment(i)" *ngFor="let comment of comments; let i = index"></comment>
                        
                        <div class="col-lg-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Comment..." #inputComment (keyup.enter)="addComment(inputComment)"/>
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button" (click)="addComment(inputComment)">Comment</button>
                                </span>
                            </div>
                        </div>
                        
                    </li>
                </ul>
            `
}) // problem ostaju slike korisnika

export class Tweet {
    @Input() public tweet: string;
    @Input() public user: string;
    @Input() public thisUser: string;
    private comments: Comment[];

    constructor(){        
        
    }

    public getComment(index: number){
        return this.comments[index].getCommentText();
    }
    public getUser(index: number){
        return this.user;
    }
    
    public addComment(commentInput: HTMLInputElement){ 
        if(commentInput.value != "")
            this.comments.push(new Comment(commentInput.value));
            this.comments.join("aa");
        commentInput.value = "";
    }
}

export class Comment{
    private commentText: string;

    constructor(commentText: string){
        this.commentText = commentText;
    }

    public getCommentText(){
        return this.commentText;
    }
}