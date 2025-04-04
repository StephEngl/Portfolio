import { Component, HostListener } from '@angular/core';
import { Project } from '../../app/interfaces/project';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

interface ProjectTech {
  name: string,
  technologiesImages: string[];
  technologiesNames: string[];
  screenshot: string;
  linkLiveTest: string;
  linkGitHub: string;
}

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
      name: "DA Bubble",
      technologiesImages: [
        '../../assets/icons/icon_project_angular.svg',
        '../../assets/icons/icon_project_typescript.svg',
        '../../assets/icons/icon_project_firebase.svg',
      ],
      technologiesNames: ['Angular', 'TypeScript', 'Firebase'],
      screenshot: '../../assets/img/screenshot_dABubble.png',
      linkLiveTest: '',
      linkGitHub: '',
    },
    {
      name: "Elara",
      technologiesImages: [
        '../../assets/icons/icon_project_html.svg',
        '../../assets/icons/icon_project_javascript.svg',
        '../../assets/icons/icon_project_css.svg',
      ],
      technologiesNames: ['JavaScript', 'HTML', 'CSS'],
      screenshot: '../../assets/img/screenshot_elara.png',
      linkLiveTest:
        'https://stephanie-englberger.developerakademie.net/M12_Jump_n_Run/index.html',
      linkGitHub: 'https://github.com/StephEngl/Elara',
    },
    {
      name: "Join",
      technologiesImages: [
        '../../assets/icons/icon_project_angular.svg',
        '../../assets/icons/icon_project_typescript.svg',
        '../../assets/icons/icon_project_css.svg',
      ],
      technologiesNames: ['Angular', 'TypeScript', 'CSS'],
      screenshot: '../../assets/img/screenshot_join.png',
      linkLiveTest: '',
      linkGitHub: '',
    },
    {
      name: "Pokédex",
      technologiesImages: [
        '../../assets/icons/icon_project_html.svg',
        '../../assets/icons/icon_project_javascript.svg',
        '../../assets/icons/icon_project_css.svg',
      ],
      technologiesNames: ['JavaScript', 'HTML', 'CSS'],
      screenshot: '../../assets/img/screenshot_pokedex.png',
      linkLiveTest: 'https://pokedex.stephanie-englberger.de/',
      linkGitHub: 'https://github.com/StephEngl/Pokedex',
    },
  ];

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
    console.log(this.projects);

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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmartphoneScreen = window.innerWidth < 420;
  }
}
