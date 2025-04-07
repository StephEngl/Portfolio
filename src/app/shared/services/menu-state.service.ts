import { Injectable, signal } from '@angular/core';

/**
 * MenuStateService manages the open/close state of the mobile menu
 * and synchronizes it with the DOM body class for styling purposes.
 */
@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  isMenuOpen = signal(false); // Signal für den Zustand des Menüs

  /**
   * Toggles the menu state between open and closed
   * and updates the body class accordingly
   */
  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
    if (this.isMenuOpen()) {
      document.body.classList.add('menu_open');
    } else {
      document.body.classList.remove('menu_open');
    }
  }
}
