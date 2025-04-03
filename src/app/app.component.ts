import { Component } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NavComponent } from './shared/components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    NgxTypedJsModule,
    TranslatePipe,
    TranslateDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    const storedLanguage = this.getFromLocalStorage();
    if (storedLanguage) {
      this.translate.use(storedLanguage);
    } else {
      this.translate.use('en');
    }
  }

  getFromLocalStorage(): string | null {
    return localStorage.getItem('currentLanguage');
  }
}
