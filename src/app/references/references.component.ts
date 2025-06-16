import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Reference } from '../interfaces/reference';

/**
 * ReferencesComponent displays a collection of professional references with horizontal scrolling capability.
 * Integrates translation support for multilingual content display.
 */
@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references: Reference[] = [
    {
      name: 'Patrick Frey',
      project: 'Join',
      translationKey: 'text1',
      linkedInPath: 'https://www.linkedin.com/in/patrick-frey-690000164/',
    },
    {
      name: 'Jon Michutta',
      project: 'Kochwelt',
      translationKey: 'text2',
      linkedInPath: 'https://www.linkedin.com/in/jonathan-michutta-527722210/',
    },
    {
      name: 'Jennifer Thomas',
      project: 'DA Bubble',
      translationKey: 'text3',
      linkedInPath: 'https://www.linkedin.com/in/jennifer-thomas-595735360/',
    },
  ];

  constructor(private translate: TranslateService) {}

  /**
   * Handles wheel events for horizontal scrolling of the reference container.
   * Converts vertical wheel movement to horizontal scrolling and prevents page scroll.
   * @param {WheelEvent} event - The wheel event object containing scroll data
   */
  onWheel(event: WheelEvent): void {
    const container = event.currentTarget as HTMLElement;
    event.preventDefault();
    const scrollSpeed = 1.5;
    container.scrollLeft += event.deltaY * scrollSpeed;
  }
}
