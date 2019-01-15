import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialShareLinksComponent } from './social-share-links.component';

describe('SocialShareLinksComponent', () => {
  let component: SocialShareLinksComponent;
  let fixture: ComponentFixture<SocialShareLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialShareLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialShareLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
