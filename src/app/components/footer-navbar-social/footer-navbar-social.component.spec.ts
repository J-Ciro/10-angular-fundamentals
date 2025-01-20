import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavbarSocialComponent } from './footer-navbar-social.component';

describe('FooterNavbarSocialComponent', () => {
  let component: FooterNavbarSocialComponent;
  let fixture: ComponentFixture<FooterNavbarSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNavbarSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNavbarSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
