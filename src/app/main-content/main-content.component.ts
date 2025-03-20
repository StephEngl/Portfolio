import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroComponent,
    NavComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
