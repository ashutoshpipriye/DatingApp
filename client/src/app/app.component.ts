import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

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
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    // this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    // const user: User = JSON.parse(localStorage.getItem('user') || '');
    const user: User = JSON.parse(localStorage.getItem('user') ?? 'null'); //store the current user details and if refreash the page user is login
    this.accountService.setCurrentUser(user);

    // const user: User = JSON.parse(localStorage.getItem('user') ?? '{}');
  }

  // getUsers() {
  //   // use of this keyword to acess the any property inside the class
  //   this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //     this.users = response;
  //   }, error => {
  //     console.log(error);
  //   })
  // }
}
