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
                        <comment [user]="getUser(i)" [text]="getComment(i)" *ngFor="let comment of comments; let i = index"></comment>
                        
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
}) // problem ostaju slike korisnika aaaa

export class Tweet {
    @Input() public tweet: string;
    @Input() public user: string;
    @Input() public thisUser: string;
    private comments: Comment[];

    constructor(){        
        this.comments = [];
    }

    public getComment(index: number){
        return this.comments[index].getCommentText();
    }
    public getUser(index: number){
        return this.comments[index].getCommentUser();
    }
    
    public addComment(commentInput: HTMLInputElement){ 
        if(commentInput.value != "")
            this.comments.push(new Comment(commentInput.value, this.thisUser));
        commentInput.value = "";
    }
}

export class Comment{
    private commentText: string;
    private thisCommentsUser: string;

    constructor(commentText: string, thisCommentsUser: string){
        this.commentText = commentText;
        this.thisCommentsUser = thisCommentsUser;
    }

    public getCommentText(){
        return this.commentText;
    }
    public getCommentUser(){
        return this.thisCommentsUser;
    }
}