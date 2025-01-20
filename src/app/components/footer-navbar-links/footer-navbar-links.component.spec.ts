import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavbarLinksComponent } from './footer-navbar-links.component';

describe('FooterNavbarLinksComponent', () => {
  let component: FooterNavbarLinksComponent;
  let fixture: ComponentFixture<FooterNavbarLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNavbarLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNavbarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
