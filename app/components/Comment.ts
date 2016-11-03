import { Component, Input } from '@angular/core';
@Component({
 selector: 'comment',
 template: `
                <h3>{{user}}<h3>
                <h4>{{text}}</h4>
            `
})

export class Comment { 
    @Input() public user: string;
    @Input() public text: string;
}