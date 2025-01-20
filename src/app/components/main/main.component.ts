import { Component } from '@angular/core';
import { MainSectionComponent } from '../main-section/main-section.component';
import { MainRightNavbarComponent } from "../main-right-navbar/main-right-navbar.component";

@Component({
  selector: 'app-main',
  imports: [MainSectionComponent, MainRightNavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  public subMenuItems = {
    1: ['Home', 'About', 'Why', 'Design', 'Stay Updated'],
    
  }
  public addMenuClass = {
    1: 'menu',
    2: 'main-nav__container',
    3: 'footer__section-nav'
  };


  backgroundColor: string = '#ffffff';

  changeBackgroundColor() {
    this.backgroundColor = this.generateRandomColor();
  }

  private generateRandomColor(): string {
    const words = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += words[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
