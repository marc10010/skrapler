import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkedInComponent } from './linkedIn.component';


describe('LinkedinComponent', () => {
  let component: LinkedInComponent;
  let fixture: ComponentFixture<LinkedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
