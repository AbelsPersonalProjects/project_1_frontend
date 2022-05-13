import { TestBed } from '@angular/core/testing';
import { User } from '../models/User.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach( () => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should have url as 'http://35.239.88.210:8080/project-1'`, () => {
    expect(service.url).toBe('http://35.239.88.210:8080/project-1');
  });

  it(`should have loginEndpoint as '/login'`, () => {
    expect(service.loginEndpoint).toBe('/login');
  });

  it('should return a User when login is called', () => {
    const mockUser: User = {id: 1, userName: 'MrPlow', roleId: 1, profilePic: 'pic.png', reimbursements: []};

    service.login('MrPlow','password')
    .subscribe( user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(service.url+service.loginEndpoint);
    req.flush(mockUser);
  });
});

