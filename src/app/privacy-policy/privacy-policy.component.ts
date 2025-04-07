import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from '../shared/components/header/header.component';

/**
 * PrivacyPolicyComponent is a standalone Angular component that displays the privacy policy content.
 * Integrates routing capabilities and translation support through its imported dependencies.
 */
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslatePipe, HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {}
