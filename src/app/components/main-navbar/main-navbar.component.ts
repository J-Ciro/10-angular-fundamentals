import { Component, input } from '@angular/core';


@Component({
  selector: 'app-main-navbar',
  imports: [],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {

   public items = input<string[]>();
   public menuClass = input<string>();

}
