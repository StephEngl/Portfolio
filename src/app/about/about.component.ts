import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

/**
 * AboutComponent is a standalone Angular component that displays information about the user.
 * It supports dynamic language translation and uses animations for toggling icons.
 */
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

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Sets up translations and subscribes to language change events.
   */
  ngOnInit() {
    this.loadTranslations();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTranslations();
    });
  }

  /**
   * Loads translations for specific keys and updates the typedStrings array.
   */
  loadTranslations() {
    this.translate
      .get(['about-me.location2', 'about-me.location3'])
      .subscribe((translations) => {
        this.typedStrings = [
          translations['about-me.location2'],
          translations['about-me.location3'],
        ];
      });
  }

  /**
   * Toggles the displayed icon based on the provided index and applies fade animations.
   * @param {number} index - The index of the icon to display (0 for location, 1 for remote work).
   */
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
