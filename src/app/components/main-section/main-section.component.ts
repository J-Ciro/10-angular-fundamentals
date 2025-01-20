
import { CommonModule } from '@angular/common';
import { Component, input, ElementRef, AfterViewInit, inject, output } from '@angular/core';
import { ThemeService } from '../../services/theme.services';


@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent implements AfterViewInit {

  public mensaje = output<string>();

  private element = inject(ElementRef);
  private themeService = inject(ThemeService);

  public pageId = input<string>();
  public id = input<string>();
  public theme = input<any>(); 
  public title = input<string>();
  public subTitle = input<string>();
  public description = input<string>();
  public subDescription = input<string>();
  public buttons = input<{ text: string, label: string, class: string }[]>();
  public titleSize = input<string>();
  public subTitleSize = input<string>();
  public descriptionSize = input<string>();

  private sectionToNavItem = {
    'main__page-1': 'Home',
    'main__page-2': 'About',
    'main__page-3': 'Why',
    'main__page-4': 'Design',
    'main__page-5': 'Stay Updated'
  };

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && this.theme()) {

            this.themeService.updateTheme(this.theme());
            
            this.updateActiveNavItem(`main__${this.id()}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(this.element.nativeElement);
  }

  private updateActiveNavItem(sectionClass: string) {
    document.querySelectorAll('.main-nav__item').forEach(item => {
      item.classList.remove('main-nav__item--active');
    });

    const sectionName = Object.entries(this.sectionToNavItem).find(([key]) => 
      sectionClass.includes(key)
    )?.[1];

    if (sectionName) {
      document.querySelectorAll('.main-nav__item').forEach(item => {
        const link = item.querySelector('a');
        if (link?.textContent?.trim() === sectionName) {
          item.classList.add('main-nav__item--active');
        }
      });
    }
  }

  public elementClick = output<void>();


  onClickElement() {
    this.elementClick.emit(); 
  }



}