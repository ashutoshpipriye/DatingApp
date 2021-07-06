import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// implement th OnInit method and the implemnt interface
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any; //declare the users property

  // Http request
  constructor(private accountService: AccountService, private presence: PresenceService) { }

  ngOnInit() {
    // this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    // const user: User = JSON.parse(localStorage.getItem('user') || '');
    const user: User = JSON.parse(localStorage.getItem('user') ?? 'null'); //store the current user details and if refreash the page user is login
    if (user) {
      this.accountService.setCurrentUser(user);
      this.presence.createHubConnection(user);
    }
  }
}
