import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';
import { LandingpageComponent } from './landingpage.component';

describe('LandingpageComponent', () => {
  let component: LandingpageComponent;
  let fixture: ComponentFixture<LandingpageComponent>;
  let mockUserService = jasmine.createSpyObj('UserService',['login']);
  let mockUser: User;
  let router: Router;
  let store = {};
  let mockLocalStorage: any;

  beforeEach(async () => {
    mockUser = {id: 1, userName: 'MrPlow', roleId: 1, profilePic: 'pic.png', reimbursements: []};
    
    //Import FormsModule and ReactiveFormsModule so that they can be injected by the test bed
    await TestBed.configureTestingModule({
      declarations: [ LandingpageComponent ],
      providers: [{provide: UserService, useValue: mockUserService}], 
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? (store as any)[key] : null;
      },
      setItem: (key: string, value: string) => {
        (store as any)[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete (store as any)[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

    fixture = TestBed.createComponent(LandingpageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call user service login', () => {
    mockUserService.login.and.returnValue(of(true));
    component.login();
    expect(mockUserService.login).toHaveBeenCalledTimes(1);
  })

  it('should have loginForm values as empty', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      username: '',
      password: ''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  // it('should store userName in localStorage', () => {
  //   component.loginForm.value.username = 'MrPlow';
  //   component.loginForm.value.password = 'password';
  //   mockUserService.login.and.returnValue(of(mockUser));
  //   component.login(); 
  //   expect(mockLocalStorage.getItem('userName')).toEqual(mockUser.userName);
  // });
});
