import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * PrivacyPolicyComponent is a standalone Angular component that displays the privacy policy content.
 * Integrates routing capabilities and translation support through its imported dependencies.
 */
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterOutlet, TranslatePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {}
