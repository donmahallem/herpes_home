import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface IRoutes {
  name: string;
  path: string;
  external?: boolean;
}

@Component({
  selector: 'app-home-list',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss',
})
export class HomeListComponent {
  title = 'herpes_home';
  items: IRoutes[] = [];
}
