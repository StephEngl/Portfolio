import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isMenuOpen = false;
  currentLang: string = this.translate.getDefaultLang();;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}