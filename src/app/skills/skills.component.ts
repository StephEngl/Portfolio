import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { interval, Subscription } from 'rxjs';
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
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class SkillsComponent {
  intervalSub: Subscription | null = null;
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
  skillSets : {label:string; skills:{ src: string; mobileSrc:string; alt: string }[]}[] = [
    { label: 'Frontend', skills: this.frontendSkills },
    { label: 'Backend', skills: this.backendSkills },
    { label: 'Tools', skills: this.toolsSkills },
  ];
  selectedIndex : number = 0;
  selectedSkillSet : { src: string; mobileSrc: string; alt: string }[] = this.skillSets[this.selectedIndex].skills;

  constructor() {
    this.startAutoSwitch();
  }

  startAutoSwitch() {
    this.intervalSub?.unsubscribe();
    this.intervalSub = interval(5000).subscribe(() => this.nextSkillSet());
  }

  nextSkillSet() {
    this.selectedIndex = (this.selectedIndex + 1) % this.skillSets.length;
    this.selectedSkillSet = this.skillSets[this.selectedIndex].skills;
  }

  onTechStackSelected(stack: string) {
    const found = this.skillSets.find(s => s.label === stack);
    if (found) {
      this.selectedSkillSet = found.skills;
      this.startAutoSwitch();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 550;
    this.buttonsMobile = window.innerWidth < 450;
  }

  ngOnDestroy() {
    this.intervalSub?.unsubscribe();
  }
}
