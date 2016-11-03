import { Component, Input } from '@angular/core';
@Component({
 selector: 'comment',
 template: `
                <h3>{{thisUser}}<h3>
                <h4>{{commentText}}</h4>
            `
})

export class Comment { 
    @Input() public thisUser: string;
    @Input() public commentText: string;
}