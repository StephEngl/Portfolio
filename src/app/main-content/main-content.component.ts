import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { NavComponent } from '../shared/components/nav/nav.component';
import { ReferencesComponent } from '../references/references.component';

/**
 * MainContentComponent is a standalone Angular component that serves as the primary layout container.
 * Aggregates and orchestrates core application sections through imported child components.
 */
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroComponent,
    NavComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
