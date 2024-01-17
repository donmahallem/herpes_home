import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hass-home',
  standalone: true,
  imports: [MatSlideToggleModule, MatCardModule, MatButtonModule],
  templateUrl: './hass-home.component.html',
  styleUrl: './hass-home.component.scss',
})
export class HassHomeComponent {
  title = 'herpes_home';
}
