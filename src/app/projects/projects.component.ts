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
  projectsFrontend: Project[] = [];
  projectsBackend: Project[] = [];
  techStack: string[] = ['Frontend', 'Backend'];
  selectedStack: string = 'Frontend';
  isSmartphoneScreen: boolean = window.innerWidth < 420;
  selectedProject: number = 0;

  projectsTechFrontend: ProjectTech[] = [
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

  projectsTechBackend: ProjectTech[] = [
    {
      name: 'KanMind',
      technologiesImages: [
        '../../assets/icons/icon_project_python.svg',
        '../../assets/icons/icon_project_django.svg',
        '../../assets/icons/icon_project_sql.svg',
        '../../assets/icons/icon_project_api.svg',
        '../../assets/icons/icon_project_postman.svg',
      ],
      technologiesNames: ['Python', 'Django', 'DRF', 'SQLite', 'RestAPI','Postman'],
      screenshot: '../../assets/img/screenshot_kanmind.png',
      linkLiveTest: 'https://kanmind.stephanie-englberger.de/',
      linkGitHub: 'https://github.com/StephEngl/KanMind',
    },
    {
      name: 'Coderr',
      technologiesImages: [
        '../../assets/icons/icon_project_python.svg',
        '../../assets/icons/icon_project_django.svg',
        '../../assets/icons/icon_project_sql.svg',
        '../../assets/icons/icon_project_api.svg',
        '../../assets/icons/icon_project_postman.svg',
      ],
      technologiesNames: ['Python', 'Django', 'DRF', 'SQLite', 'RestAPI','Postman'],
      screenshot: '../../assets/img/screenshot_coderr.png',
      linkLiveTest: 'https://coderr.stephanie-englberger.de/',
      linkGitHub: 'https://github.com/StephEngl/Coderr',
    },
    {
      name: 'Quizly',
      technologiesImages: [
        '../../assets/icons/icon_project_python.svg',
        '../../assets/icons/icon_project_django.svg',
        '../../assets/icons/icon_project_sql.svg',
        '../../assets/icons/icon_project_api.svg',
        '../../assets/icons/icon_project_gemini-ai.svg',
      ],
      technologiesNames: ['Python', 'Django', 'DRF', 'SQLite', 'RestAPI', 'Gemini AI'],
      screenshot: '../../assets/img/screenshot_quizly.png',
      linkLiveTest: 'https://quizly.stephanie-englberger.de/',
      linkGitHub: 'https://github.com/StephEngl/Quizly',
    },
    {
      name: 'Videoflix',
      technologiesImages: [
        '../../assets/icons/icon_project_python.svg',
        '../../assets/icons/icon_project_django.svg',
        '../../assets/icons/icon_project_redis.svg',
        '../../assets/icons/icon_project_postgresql.svg',
        '../../assets/icons/icon_project_pytest.svg',
        '../../assets/icons/icon_project_docker.svg',
      ],
      technologiesNames: ['Python', 'Django', 'DRF', 'Redis', 'PostgreSQL', 'pytest', 'Docker'],
      screenshot: '../../assets/img/screenshot_videoflix.png',
      linkLiveTest: 'https://videoflix.stephanie-englberger.de/',
      linkGitHub: 'https://github.com/StephEngl/Videoflix',
    },
  ];

  get projectsTech(): ProjectTech[] {
    return this.selectedStack === 'Frontend'
      ? this.projectsTechFrontend
      : this.projectsTechBackend;
  }

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

  switchStack() {
    this.selectedStack =
      this.selectedStack === 'Frontend' ? 'Backend' : 'Frontend';
    this.selectedProject = 0;
    this.loadTranslations();
  }

  /**
   * Loads translated content for project labels and descriptions.
   * Maintains synchronization between technical data and translated content.
   */
  loadTranslations() {
    this.translate.get('projects.labels').subscribe((labels: string[]) => {
      this.projectsInfoLabels = labels;
    });

    if (this.selectedStack === 'Frontend') {
    this.projectsFrontend = [];
    for (let i = 1; i <= 4; i++) {
      this.translate.get(`projects.project${i}`).subscribe((project) => {
        this.projectsFrontend.push(project);
      });
    }
    this.projects = this.projectsFrontend;
  } else {
    this.projectsBackend = [];
    for (let i = 5; i <= 8; i++) {
      this.translate.get(`projects.project${i}`).subscribe((project) => {
        this.projectsBackend.push(project);
      });
    }
    this.projects = this.projectsBackend;
  }
  }

  /**
   * Retrieves specific information for a project based on label index.
   * @param projectIndex Index of the project in projects array
   * @param labelIndex Type of information requested (0=about, 1=organization, 2=experience)
   * @returns Requested information string or empty string for invalid indices
   */
  getProjectInfo(projectIndex: number, labelIndex: number): string | string[] {
    const project = this.projects[projectIndex];
    switch (labelIndex) {
      case 0:
        return project.description;
      case 1:
        return project.highlights;
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
