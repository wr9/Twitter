import { Component, Input } from '@angular/core';
@Component({
 selector: 'user-cover',
 templateUrl: 'app/components/userCover/userCover.html',
})

export class UserCover {
    @Input() public userName;
}