import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterFilterComponent } from './twitter-filter.component';

describe('TwitterFilterComponent', () => {
  let component: TwitterFilterComponent;
  let fixture: ComponentFixture<TwitterFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
