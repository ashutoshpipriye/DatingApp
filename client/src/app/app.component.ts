import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    // use of this keyword to acess the any property inside the class
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
