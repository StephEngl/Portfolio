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
    { src: '../../assets/icons/skill_icon_vb.png', mobileSrc: "../../assets/icons/icon_project_vb.svg", alt: 'Icon VB' },
  ];
  backendSkills : { src: string; mobileSrc: string; alt: string }[] = [
    { src: '../../assets/icons/icon_project_python.svg', mobileSrc:"", alt: 'Icon Python' },
    { src: '../../assets/icons/icon_project_django.svg', mobileSrc:"", alt: 'Icon Django' },
    { src: '../../assets/icons/icon_project_sql.svg', mobileSrc:"", alt: 'Icon SQL' },
    { src: '../../assets/icons/icon_project_api.svg', mobileSrc: '../../assets/icons/skill_icon_api.svg', alt: 'Icon API' },
    { src: '../../assets/icons/skill_icon_firebase.svg', mobileSrc:"../../assets/icons/icon_project_firebase.svg", alt: 'Icon Firebase' },
    { src: '../../assets/icons/icon_project_postman.svg', mobileSrc:"", alt: 'Icon Postman' },
    { src: '../../assets/icons/icon_project_redis.svg', mobileSrc:"", alt: 'Icon Redis' },
    { src: '../../assets/icons/icon_project_postgresql.svg', mobileSrc:"", alt: 'Icon PostgreSQL' },
    { src: '../../assets/icons/icon_project_pytest.svg', mobileSrc:"", alt: 'Icon pytest' },
    { src: '../../assets/icons/icon_project_docker.svg', mobileSrc:"", alt: 'Icon Docker' },
  ];
  toolsSkills : { src: string; mobileSrc:string; alt: string }[] = [
    { src: '../../assets/icons/skill_icon_git.svg', mobileSrc:"", alt: 'Icon GIT' },
    { src: '../../assets/icons/skill_icon_scrum.svg', mobileSrc:"", alt: 'Icon Scrum' },
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
