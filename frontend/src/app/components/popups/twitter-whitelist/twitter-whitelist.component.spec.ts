import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterWhitelistComponent } from './twitter-whitelist.component';

describe('TwitterWhitelistComponent', () => {
  let component: TwitterWhitelistComponent;
  let fixture: ComponentFixture<TwitterWhitelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterWhitelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterWhitelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
