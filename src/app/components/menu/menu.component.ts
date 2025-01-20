import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, output, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public isMainMenu = input<string>();
  public items = input<string[]>();
  public menuClass = input<string>();
  public svgs = input<string[]>([]);
  public sanitizedSvgs: SafeHtml[] = [];
  
  public subMenuItems = {
    1: ['Blog', 'Docs', 'Forum', 'Support'],
  }

  constructor(private sanitizer: DomSanitizer) {
    effect(() => {
      const svgArray = this.svgs();
      if (svgArray) {
        this.sanitizedSvgs = svgArray.map((svg: string) => 
          this.sanitizer.bypassSecurityTrustHtml(svg)
        );
      }
    });
  }

  formatHref(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '');
  }
}
