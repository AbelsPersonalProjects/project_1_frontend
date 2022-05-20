import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userName!: any;   
  userRole!: string; 
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkIfSignedIn();
  }

  ngDoCheck(): void {
    this.checkIfSignedIn();
  }

  checkIfSignedIn(){
    const jwt = localStorage.getItem('jwt');
    if(jwt == null) {
      this.router.navigate(['home']);
    }
    this.userRole = this.getRole();
    this.userName = localStorage.getItem('userName');  
  }

  getRole(){
    return localStorage.getItem('userRole') == '1' ? 'Manager' : 'Associate';
  }
}
