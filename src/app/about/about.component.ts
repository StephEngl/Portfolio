import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, NgxTypedJsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  currentImage: string = 'url("../../assets/icons/icon_location.svg")';
  fadeClass: string = 'fade-in';
  typedStrings: string[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadTranslations();

    // listen to language changes
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTranslations();
    });
  }
  
  loadTranslations() {
    this.translate.get(['about-me.location2', 'about-me.location3']).subscribe((translations) => {
      this.typedStrings = [translations['about-me.location2'], translations['about-me.location3']];
    });
  }

  toggleIcon(index: number): void {
    this.fadeClass = 'fade-out';
    setTimeout(() => {
      if (index === 0) {
        this.currentImage = 'url("../../assets/icons/icon_location.svg")';
      } else if (index === 1) {
        this.currentImage = 'url("../../assets/icons/icon_remote.svg")';
      }
      this.fadeClass = 'fade-in';
    }, 200);
  }
}
