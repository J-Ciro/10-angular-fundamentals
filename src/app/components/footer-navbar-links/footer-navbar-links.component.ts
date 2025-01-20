import { Component, input } from '@angular/core';


@Component({
  selector: 'app-footer-navbar-links',
  imports: [],
  templateUrl: './footer-navbar-links.component.html',
  styleUrl: './footer-navbar-links.component.scss'
})
export class FooterNavbarLinksComponent {
  public items = input<string[]>();
   public menuClass = input<string>();

   public addMenuClass = {
    1: 'menu',
    2: 'main-nav__container',
    3: 'footer__section-nav'
  };

}
