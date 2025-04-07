import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NavComponent } from './shared/components/nav/nav.component';

/**
 * AppComponent serves as the root component of the Angular application.
 * Handles language initialization and provides the main application layout.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NgxTypedJsModule, NavComponent],
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

  /**
   * Retrieves the preferred language setting from localStorage.
   * @returns {string | null} The stored language code or null if not set
   */
  getFromLocalStorage(): string | null {
    return localStorage.getItem('currentLanguage');
  }
}
