import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.checkIfSignedIn();
  }

  ngDoCheck(): void {
    this.checkIfSignedIn();
  }

  checkIfSignedIn(){
    const jwt = localStorage.getItem('jwt');
    if( jwt != null ) {
      this.loggedIn = true;
    }else {
      this.loggedIn = false;
    }
  }

  logout(){
    localStorage.clear();
  }
}
