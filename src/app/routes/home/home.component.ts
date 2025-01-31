import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeListComponent } from './home-list.component';

@Component({
  selector: 'app-home',
  imports: [MatSlideToggleModule, HomeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'herpes_home';
}
