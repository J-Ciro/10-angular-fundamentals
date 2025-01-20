import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightNavbarComponent } from './main-right-navbar.component';

describe('MainRightNavbarComponent', () => {
  let component: MainRightNavbarComponent;
  let fixture: ComponentFixture<MainRightNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainRightNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRightNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
