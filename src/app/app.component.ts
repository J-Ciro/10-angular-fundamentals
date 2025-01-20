import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< HEAD
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

=======

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
>>>>>>> 1bdb79270d4894d0982ab3287b881b3ae77b3143
}
