import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

import { LandingpageComponent } from './landingpage.component';

describe('LandingpageComponent', () => {
  let component: LandingpageComponent;
  let fixture: ComponentFixture<LandingpageComponent>;
  let mockUserService;
  let mockUser;
  let formBuilder;

  beforeEach(async () => {
    mockUser = {id: 1, userName: 'MrPlow', roleId: 1, profilePic: 'pic.png', reimbursements: []};
    mockUserService = jasmine.createSpyObj('UserService',['login']);
    let user = mockUserService.login.and.returnValue(of(mockUser));

    formBuilder = jasmine.createSpyObj('FormBuilder',['group']);
    let loginForm = formBuilder.group.and.returnValue({username:'MrPlow',password:'password'});

    await TestBed.configureTestingModule({
      declarations: [ LandingpageComponent ],
      providers: [{provide: UserService, useValue: mockUserService},{provide: FormBuilder, useValue: formBuilder}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
