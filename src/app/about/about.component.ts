import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, NgxTypedJsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
name = "Teamkollegen"
}
