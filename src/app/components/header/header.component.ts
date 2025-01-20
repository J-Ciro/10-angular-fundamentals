import { Component, input } from '@angular/core';

import { MainNavbarComponent } from "../main-navbar/main-navbar.component";

@Component({
  selector: 'app-header',
  imports: [MainNavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public subMenuItems = {
    1: ['Blog', 'Docs', 'Forum', 'Support'],
  

  }
  public addMenuClass = {
    1: 'menu',
    2: 'main-nav__container',
    3: 'footer__section-nav'
  };


  public isMainMenu: boolean = true;

}
