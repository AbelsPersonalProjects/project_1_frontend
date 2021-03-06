import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should contiain 'Abel Asres' as creator`, () => {
    expect(component.creator).toBe('Abel Asres');
  });

  it(`should have appName as blank`, () => {
    expect(component.appName).toBe('');
  });

  it(`should have gitHub link as 'https://github.com/AbelsPersonalProjects/project_1_frontend'`, () => {
    expect(component.gitHub).toBe('https://github.com/AbelsPersonalProjects/project_1_frontend');
  });
});
