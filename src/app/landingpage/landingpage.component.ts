import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }


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
        next: user => {
          localStorage.setItem('userName',user.userName);
          console.log(user);
          //localStorage.setItem('userRole',user.roleId);
          //localStorage.setItem('userId',user.id);
          //let token = response.headers.get('Token');
          //localStorage.setItem('jwt', token);
        },
        error: err =>{
          console.log(err);
        }
      }
    )
  }
}
