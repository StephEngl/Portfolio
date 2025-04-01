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
  currentLang: string = this.translate.getDefaultLang();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
    this.getFromLocalStorage();
    if (!this.currentLang) {
      this.currentLang = this.translate.getDefaultLang();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('currentLanguage', this.currentLang);
  }

  getFromLocalStorage() {
    let storedLanguage = localStorage.getItem('currentLanguage');
    if (null != storedLanguage) {
      this.currentLang = storedLanguage;
    }
  }
}
