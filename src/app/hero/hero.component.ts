import { Component } from '@angular/core';
import { MenuStateService } from '../shared/services/menu-state.service';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * HeroComponent is a standalone Angular component that displays the hero section.
 * It depends on MenuStateService to manage menu-related state interactions.
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(public menuStateService: MenuStateService) {}
}
