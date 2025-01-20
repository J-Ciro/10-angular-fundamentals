import { Component, input } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-header',
  imports: [MenuComponent],
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
