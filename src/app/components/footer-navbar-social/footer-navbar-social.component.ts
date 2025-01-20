import { Component, effect, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer-navbar-social',
  imports: [],
  templateUrl: './footer-navbar-social.component.html',
  styleUrl: './footer-navbar-social.component.scss'
})
export class FooterNavbarSocialComponent {
   public items = input<string[]>();
   public menuClass = input<string>();
   public svgs = input<string[]>([]);
   public sanitizedSvgs: SafeHtml[] = [];



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



   
}
