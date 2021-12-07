import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterWordsFilterComponent } from './twitter-words-filter.component';

describe('TwitterWordsFilterComponent', () => {
  let component: TwitterWordsFilterComponent;
  let fixture: ComponentFixture<TwitterWordsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterWordsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterWordsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
