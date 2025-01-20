import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-right-navbar',
  imports: [],
  templateUrl: './main-right-navbar.component.html',
  styleUrl: './main-right-navbar.component.scss'
})
export class MainRightNavbarComponent {
   public items = input<string[]>();
   public menuClass = input<string>();


   formatHref(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '');
  }
}
