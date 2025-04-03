import { Component } from '@angular/core';
import { Project } from '../../app/interfaces/project';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsInfoLabels: string[] = [];
  projects: Project[] = [];

  selectedProject: number = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // get and translate labels
    this.translate.get('projects.labels').subscribe((labels: string[]) => {
      this.projectsInfoLabels = labels;
    });

    // get and translate projects information
    this.translate.get('projects.project1').subscribe((project1) => {
      this.projects.push(project1);
    });
    this.translate.get('projects.project2').subscribe((project2) => {
      this.projects.push(project2);
    });
    this.translate.get('projects.project3').subscribe((project3) => {
      this.projects.push(project3);
    });
    this.translate.get('projects.project4').subscribe((project4) => {
      this.projects.push(project4);
    });
  }

  getProjectInfo(projectIndex: number, labelIndex: number): string {
    const project = this.projects[projectIndex];
    switch (labelIndex) {
      case 0:
        return project.about;
      case 1:
        return project.organization;
      case 2:
        return project.groupExperience || project.experience;
      default:
        return '';
    }
  }
}
