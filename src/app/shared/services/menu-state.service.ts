import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  isMenuOpen = signal(false); // Signal für den Zustand des Menüs

  toggleMenu() {
    this.isMenuOpen.update((open) => !open); // Zustand umschalten
  }
}
