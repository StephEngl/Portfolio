import { Component } from '@angular/core';
import { Project } from '../../app/interfaces/project';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsInfoLabels: string[] = [];
  projects: Project[] = [
    {
      name: 'DA Bubble',
      duration: '4 weeks',
      about:
        'This app is a Slack-inspired communication platform designed to enhance team collaboration in professional settings. It features an intuitive interface, real-time messaging, and robust channel organization, making it easy for teams to stay connected and work efficiently.',
      organization:
        'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      experience: '',
      groupExperience:
        'We worked together in a Team of  Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
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
      name: 'Elara',
      duration: '3 weeks',
      about:
        'Join Elara in a simple but exciting Jump-and-Run game based on an object-oriented approach. Help her find fire crystals to unlock powerful fireballs and rescue the mystical Enchanted Grove.',
      organization:
        'I organized my work by outlining a rough structure, gathering all necessary components, building a framework, and then expanding upon it.',
      experience:
        'This project deepened my understanding of Object-Oriented Programming (OOP), introduced me to browser events, and significantly enhanced my JavaScript skills. I applied these concepts practically, gaining valuable hands-on experience in modern web development techniques.',
      groupExperience: '',
      technologiesImages: [
        '../../assets/icons/icon_project_html.svg',
        '../../assets/icons/icon_project_javascript.svg',
        '../../assets/icons/icon_project_css.svg',
      ],
      technologiesNames: ['JavScript', 'HTML', 'CSS'],
      screenshot: '../../assets/img/screenshot_elara.png',
      linkLiveTest:
        'https://stephanie-englberger.developerakademie.net/M12_Jump_n_Run/index.html',
      linkGitHub: 'https://github.com/StephEngl/Elara',
    },
    {
      name: 'Join',
      duration: '5 weeks',
      about:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      organization: '',
      experience: '',
      groupExperience:
        'I enhanced my skills in Angular, SCSS, and TypeScript. Additionally, I gained valuable insights into professional teamwork using Scrum methodology and industry-standard tools like Git for version control and Figma for design collaboration.',
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
      name: 'Pokédex',
      duration: '1 week',
      about:
        'The Pokedex is a Pokémon trainer register that integrates with the PokeAPI. This interactive tool allows users to explore detailed information about over 1000 Pokemon. The project showcases effective API integration, data handling, and UI design, creating an engaging Pokémon encyclopedia.',
      organization:
        ' I systematically implemented all checklist items, ensuring that each task was completed with clean and well-structured code.',
      experience:
        'This project enhanced my technical skills, particularly in system interoperability, data storage and processing, as well as control structures. I gained valuable experience in how systems communicate and refined my expertise in managing program flow and logic, preparing me for more complex challenges.',
      groupExperience: '',
      technologiesImages: [
        '../../assets/icons/icon_project_html.svg',
        '../../assets/icons/icon_project_javascript.svg',
        '../../assets/icons/icon_project_css.svg',
      ],
      technologiesNames: ['JavaScript', 'HTML', 'CSS'],
      screenshot: '../../assets/img/screenshot_pokedex.png',
      linkLiveTest:
        'https://stephanie-englberger.developerakademie.net/M9_Pokedex/index.html',
      linkGitHub: 'https://github.com/StephEngl/Pokedex',
    },
  ];

  selectedProject: number = 0;

  getProjectInfo(projectIndex: number, labelIndex: number): string {
    const project = this.projects[projectIndex];
    switch (labelIndex) {
      case 0:
        return project.about;
      case 1:
        return project.organization;
      case 2:
        if (project.experience) {
          return project.experience;
        } else {
          return project.groupExperience;
        }
      default:
        return '';
    }
  }
}
