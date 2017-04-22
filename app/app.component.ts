import { Component } from '@angular/core';

import { User } from './shared/models/user';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../app/app.component.html',
  styleUrls: ['../app/app.component.css']
})
export class AppComponent {
  message: string = 'Hello!';
  users: User[] = [
    { id: 25, name: 'Emil', username: 'emiliogozo' },
    { id: 31, name: 'John', username: 'jdoe' },
    { id: 78, name: 'Jane', username: 'jane.doe' }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }
}
