import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private elementsToUpdate = [
    '.header',
    '.main-nav',
    '.footer',
    '.main__logo-right',
  ];

  updateTheme(theme: string) {
    this.elementsToUpdate.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.classList.forEach((className) => {
          if (className.startsWith('theme-')) {
            element.classList.remove(className);
          }
        });
        element.classList.add(theme);
      }
    });
  }
}
