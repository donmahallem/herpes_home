import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hass-home',
  imports: [MatSlideToggleModule, MatCardModule, MatButtonModule],
  templateUrl: './hass-home.component.html',
  styleUrl: './hass-home.component.scss',
})
export class HassHomeComponent {
  title = 'herpes_home';
}
