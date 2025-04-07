import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from '../shared/components/header/header.component';

/**
 * ImprintComponent is a standalone Angular component that displays legal imprint information.
 * Utilizes Angular's router features and translation capabilities through dependencies.
 */
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {}
