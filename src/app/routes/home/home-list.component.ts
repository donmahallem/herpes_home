import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface IRoutes {
  name: string;
  path: string;
  external?: boolean;
}

@Component({
  selector: 'app-home-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss',
})
export class HomeListComponent {
  title = 'herpes_home';
  items: IRoutes[] = [];
}
