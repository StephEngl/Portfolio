import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Reference } from '../interfaces/reference';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent implements OnInit {
  references: Reference[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initializeReferences();
  }

  initializeReferences() {
    this.references = [
      {
        name: 'Mia Mausezahn',
        project: 'Join',
        translationKey: 'text1',
        linkedInPath: '',
      },
      {
        name: 'Leo Löwenherz',
        project: 'Kochwelt',
        translationKey: 'text2',
        linkedInPath: '',
      },
      {
        name: 'Lara Lockenhaupt',
        project: 'DA Bubble',
        translationKey: 'text3',
        linkedInPath: '',
      },
    ];
  }

  onWheel(event: WheelEvent): void {
    const container = event.currentTarget as HTMLElement;
    event.preventDefault(); // Verhindert das vertikale Scrollen der Seite
    const scrollSpeed = 1.5; // Multiplikator für sanfteres Scrollen
    container.scrollLeft += event.deltaY * scrollSpeed; // Wandelt vertikale Bewegung in horizontales Scrollen um
  }
}
