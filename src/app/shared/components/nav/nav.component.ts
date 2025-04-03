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
  isMenuOpen = false;
  currentLang: string = this.translate.currentLang;

  constructor(
    private translate: TranslateService,
    public menuStateService: MenuStateService
  ) {}

  toggleMenu() {
    this.menuStateService.toggleMenu(); // Zustand über den Service ändern
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.saveToLocalStorage();
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('currentLanguage', this.currentLang);
  }
}
