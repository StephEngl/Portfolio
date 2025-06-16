import { Component, HostListener } from '@angular/core';
import { Project } from '../../app/interfaces/project';
import { ProjectTech } from '../../app/interfaces/project-tech';
import { CommonModule } from '@angular/common';
import {
  TranslatePipe,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';

/**
 * ProjectsComponent displays a portfolio of technical projects with dynamic translations.
 * Handles responsive layout adjustments and provides detailed project information.
 */
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
  isSmartphoneScreen: boolean = window.innerWidth < 420;
  selectedProject: number = 0;

  projectsTech: ProjectTech[] = [
    {
      name: 'DA Bubble',
      technologiesImages: [
        '../../assets/icons/icon_project_angular.svg',
        '../../assets/icons/icon_project_typescript.svg',
        '../../assets/icons/icon_project_firebase.svg',
      ],
      technologiesNames: ['Angular', 'TypeScript', 'Firebase'],
      screenshot: '../../assets/img/screenshot_dABubble.png',
      linkLiveTest: 'https://dabubble.stephanie-englberger.de/',
      linkGitHub: 'https://github.com/StephEngl/DABubble',
    },
    {
      name: 'Elara',
      technologiesImages: [
        '../../assets/icons/icon_project_html.svg',
        '../../assets/icons/icon_project_javascript.svg',
        '../../assets/icons/icon_project_css.svg',
      ],
      technologiesNames: ['JavaScript', 'HTML', 'CSS'],
      screenshot: '../../assets/img/screenshot_elara.png',
      linkLiveTest: 'https://elara.stephanie-englberger.de/',
      linkGitHub: 'https://github.com/StephEngl/Elara',
    },
    {
      name: 'Join',
      technologiesImages: [
        '../../assets/icons/icon_project_angular.svg',
        '../../assets/icons/icon_project_typescript.svg',
        '../../assets/icons/icon_project_firebase.svg',
      ],
      technologiesNames: ['Angular', 'TypeScript', 'CSS'],
      screenshot: '../../assets/img/screenshot_join.png',
      linkLiveTest: 'https://join.stephanie-englberger.de/',
      linkGitHub: 'https://github.com/StephEngl/Join',
    },
    {
      name: 'Pokédex',
      technologiesImages: [
        '../../assets/icons/icon_project_html.svg',
        '../../assets/icons/icon_project_javascript.svg',
        '../../assets/icons/icon_project_api.svg',
      ],
      technologiesNames: ['JavaScript', 'HTML', 'CSS'],
      screenshot: '../../assets/img/screenshot_pokedex.png',
      linkLiveTest: 'https://pokedex.stephanie-englberger.de/',
      linkGitHub: 'https://github.com/StephEngl/Pokedex',
    },
  ];

  constructor(private translate: TranslateService) {}

  /**
   * Initializes component, loads translations, and sets up language change listener.
   */
  ngOnInit() {
    this.loadTranslations();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTranslations();
    });
  }

  /**
   * Loads translated content for project labels and descriptions.
   * Maintains synchronization between technical data and translated content.
   */
  loadTranslations() {
    this.translate.get('projects.labels').subscribe((labels: string[]) => {
      this.projectsInfoLabels = labels;
    });

    this.projects = [];
    for (let i = 1; i <= 4; i++) {
      this.translate.get(`projects.project${i}`).subscribe((project) => {
        this.projects.push(project);
      });
    }
  }

  /**
   * Retrieves specific information for a project based on label index.
   * @param projectIndex Index of the project in projects array
   * @param labelIndex Type of information requested (0=about, 1=organization, 2=experience)
   * @returns Requested information string or empty string for invalid indices
   */
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

  /**
   * Handles window resize events to update mobile layout detection.
   * @param event Browser resize event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmartphoneScreen = window.innerWidth < 420;
  }
}
