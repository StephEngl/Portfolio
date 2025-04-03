import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../../../app.component';

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

  constructor(private translate: TranslateService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
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
