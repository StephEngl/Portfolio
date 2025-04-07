import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../../../app.component';
import { MenuStateService } from '../../services/menu-state.service';

/**
 * NavComponent handles navigation logic including menu state management,
 * language switching, and active link tracking. Integrates with translation
 * services for multilingual support.
 */
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [AppComponent, TranslatePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  currentLang: string = this.translate.currentLang;
  activeLink: string = '';

  constructor(
    private translate: TranslateService,
    public menuStateService: MenuStateService
  ) {}

  /**
   * Toggles the mobile menu's visibility state
   */
  toggleMenu() {
    this.menuStateService.toggleMenu();
  }

  /**
   * Closes the mobile menu if currently open
   */
  closeMenu() {
    if (this.menuStateService.isMenuOpen()) {
      this.toggleMenu();
    }
  }

  /**
   * Sets the currently active navigation link
   * @param {string} link - Identifier for the active link
   */
  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  /**
   * Changes the application language and persists selection
   * @param {string} lang - Language code to switch to (e.g., 'en', 'de')
   */
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.saveToLocalStorage();
    this.closeMenu();
  }

  /**
   * Saves the current language preference to localStorage
   */
  saveToLocalStorage() {
    localStorage.setItem('currentLanguage', this.currentLang);
  }
}
