import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  TranslatePipe,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';
import { NgxTypedJsComponent, NgxTypedJsModule } from 'ngx-typed-js';

/**
 * AboutComponent is a standalone Angular component that displays information about the user.
 * It supports dynamic language translation and uses animations for toggling icons.
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, CommonModule, NgxTypedJsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  @ViewChild(NgxTypedJsComponent) typedJsComponent!: NgxTypedJsComponent;
  private observer: IntersectionObserver | null = null;

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
   * Lifecycle hook that is called after Angular has fully initialized the component's view.
   * Initializes the IntersectionObserver to handle element visibility changes.
   */
  ngAfterViewInit() {
    this.initializeIntersectionObserver();
  }

  /**
   * Initializes the IntersectionObserver to monitor the target element's visibility.
   * Creates and attaches the observer if the target element exists.
   */
  private initializeIntersectionObserver() {
    const target = this.getTargetElement();
    if (!target) return;

    this.observer = this.createIntersectionObserver();
    this.observer.observe(target);
  }

  /**
   * Gets the target DOM element for the IntersectionObserver.
   * @returns {Element | null} The target element or null if not found.
   */
  private getTargetElement(): Element | null {
    return document.querySelector('.typing_text');
  }

  /**
   * Creates a new IntersectionObserver instance with a callback handler.
   * @returns {IntersectionObserver} Configured observer instance.
   */
  private createIntersectionObserver(): IntersectionObserver {
    return new IntersectionObserver(
      (entries) => this.handleIntersectionEntries(entries),
      { threshold: 0.5 }
    );
  }

  /**
   * Handles IntersectionObserver entries and triggers visibility callbacks.
   * @param {IntersectionObserverEntry[]} entries - Observer entries to process.
   */
  private handleIntersectionEntries(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) =>
      entry.isIntersecting
        ? this.handleElementVisible()
        : this.handleElementHidden()
    );
  }

  /**
   * Handles visibility of the observed element.
   * Starts the typing animation when element becomes visible.
   */
  private handleElementVisible() {
    const typedInstance = this.getTypedInstance();
    if (typedInstance) {
      typedInstance.start();
    }
  }

  /**
   * Handles hiding of the observed element.
   * Stops the typing animation when element becomes hidden.
   */
  private handleElementHidden() {
    const typedInstance = this.getTypedInstance();
    if (typedInstance) {
      typedInstance.stop();
    }
  }

  /**
   * Gets the typed component instance.
   * @returns {NgxTypedJsComponent} The typed component instance.
   */
  private getTypedInstance(): NgxTypedJsComponent {
    return this.typedJsComponent;
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
