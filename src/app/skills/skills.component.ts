import { Component, HostListener } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SelectTechStackComponent } from '../shared/components/select-tech-stack/select-tech-stack.component';

/**
 * SkillsComponent displays a section showcasing technical skills and competencies.
 * Utilizes translation capabilities for multilingual skill descriptions.
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe, SelectTechStackComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillSet: string[] = ['frontendSkills', 'backendSkills', 'toolsSkills'];
  isMobile: boolean = window.innerWidth < 550;
  buttonsMobile: boolean = window.innerWidth < 450;
  
  frontendSkills : { src: string; alt: string; mobileSrc: string }[] = [
    { src: '../../assets/icons/skill_icon_angular.svg', mobileSrc: "../../assets/icons/icon_project_angular.svg", alt: 'Icon Angular' },
    { src: '../../assets/icons/skill_icon_typescript.svg', mobileSrc: "../../assets/icons/icon_project_typescript.svg", alt: 'Icon Typescript' },
    { src: '../../assets/icons/skill_icon_javascript.svg', mobileSrc: "../../assets/icons/icon_project_javascript.svg", alt: 'Icon JavaScript' },
    { src: '../../assets/icons/skill_icon_html.svg', mobileSrc: "../../assets/icons/icon_project_html.svg", alt: 'Icon HTML' },
    { src: '../../assets/icons/skill_icon_css.svg', mobileSrc: "../../assets/icons/icon_project_css.svg", alt: 'Icon CSS' },
    { src: '../../assets/icons/skill_icon_bootstrap.png', mobileSrc: "../../assets/icons/icon_project_bootstrap.svg", alt: 'Icon Bootstrap' },
    { src: '../../assets/icons/skill_icon_md.svg', mobileSrc: "../../assets/icons/icon_project_md.svg", alt: 'Icon Material Design' },
  ];
  backendSkills : { src: string; mobileSrc: string; alt: string }[] = [
    { src: '../../assets/icons/skill_icon_python.svg', mobileSrc:'../../assets/icons/icon_project_python.svg', alt: 'Icon Python' },
    { src: '../../assets/icons/skill_icon_django.svg', mobileSrc:'../../assets/icons/icon_project_django.svg', alt: 'Icon Django' },
    { src: '../../assets/icons/skill_icon_sql.svg', mobileSrc: '../../assets/icons/icon_project_sql.svg', alt: 'Icon SQL' },
    { src: '../../assets/icons/skill_icon_api.svg', mobileSrc: '../../assets/icons/icon_project_api.svg', alt: 'Icon API' },
    { src: '../../assets/icons/skill_icon_firebase.svg', mobileSrc:"../../assets/icons/icon_project_firebase.svg", alt: 'Icon Firebase' },
    { src: '../../assets/icons/skill_icon_redis.svg', mobileSrc:'../../assets/icons/icon_project_redis.svg', alt: 'Icon Redis' },
    { src: '../../assets/icons/skill_icon_postgresql.svg', mobileSrc:'../../assets/icons/icon_project_postgresql.svg', alt: 'Icon PostgreSQL' },
    { src: '../../assets/icons/skill_icon_pytest.svg', mobileSrc:'../../assets/icons/icon_project_pytest.svg', alt: 'Icon pytest' },
    { src: '../../assets/icons/skill_icon_docker.svg', mobileSrc:'../../assets/icons/icon_project_docker.svg', alt: 'Icon Docker' },
  ];
  toolsSkills : { src: string; mobileSrc:string; alt: string }[] = [
    { src: '../../assets/icons/skill_icon_vscode.svg', mobileSrc:"../../assets/icons/icon_project_vscode.svg", alt: 'Icon VSCode' },
    { src: '../../assets/icons/skill_icon_github.svg', mobileSrc:'../../assets/icons/sm_button_github_hover_mint.svg', alt: 'Icon GIT' },
    { src: '../../assets/icons/skill_icon_git.svg', mobileSrc:'../../assets/icons/icon_project_git.svg', alt: 'Icon GIT' },
    { src: '../../assets/icons/skill_icon_scrum.svg', mobileSrc:'../../assets/icons/icon_project_scrum.svg', alt: 'Icon Scrum' },
    { src: '../../assets/icons/skill_icon_linux.svg', mobileSrc:'../../assets/icons/icon_project_linux.svg', alt: 'Icon Linux' },
    { src: '../../assets/icons/skill_icon_postman.svg', mobileSrc:'../../assets/icons/icon_project_postman.svg', alt: 'Icon Postman' },
  ];

  selectedSkillSet : { src: string; mobileSrc: string; alt: string }[] = this.frontendSkills;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 550;
    this.buttonsMobile = window.innerWidth < 450;
  }

  onTechStackSelected(stack: string) {
    if (stack === 'Frontend') {
      this.selectedSkillSet = this.frontendSkills;
    } else if (stack === 'Backend') {
      this.selectedSkillSet = this.backendSkills;
    } else if (stack === 'Tools') {
      this.selectedSkillSet = this.toolsSkills;
    }
  }
}
