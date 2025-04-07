import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * SkillsComponent displays a section showcasing technical skills and competencies.
 * Utilizes translation capabilities for multilingual skill descriptions.
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
