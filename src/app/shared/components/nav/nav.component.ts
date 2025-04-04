import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../../../app.component';
import { MenuStateService } from '../../services/menu-state.service';

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

  toggleMenu() {
    this.menuStateService.toggleMenu();
  }

  closeMenu() {
    if (this.menuStateService.isMenuOpen()) {
      this.toggleMenu();
    }
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.saveToLocalStorage();
    this.closeMenu();
  }

  saveToLocalStorage() {
    localStorage.setItem('currentLanguage', this.currentLang);
  }
}
