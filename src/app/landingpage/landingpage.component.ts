import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    const jwt = localStorage.getItem('jwt');
    if(jwt != null) {
      this.router.navigate(['dashboard']);
    }
  }

  @ViewChild("error_msg") error_msg!: ElementRef;

  loginForm = this.formBuilder.group({ 
    username: ['',Validators.required],
    password: ['',Validators.required]
  });

  login(){
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.userService.login(username,password)
    .subscribe(
      {
        next: response => {
          this.error_msg.nativeElement.innerHTML = "";
          localStorage.setItem('jwt', response.headers.get('Token'));
          localStorage.setItem('userName',response.body.userName);
          localStorage.setItem('userRole',response.body.roleId);
          localStorage.setItem('userId',response.body.id);
          this.router.navigate(['dashboard']);
        },
        error: response =>{
          this.error_msg.nativeElement.innerHTML = response.error;
        }
      }
    )
  }
}
