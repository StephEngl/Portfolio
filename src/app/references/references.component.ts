import { Component } from '@angular/core';

interface Reference {
  name: string;
  project: string;
  text: string;
  linkedInPath: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references:Reference[] = [
    {
      name: 'Mia Mausezahn',
      project: 'Join',
      text: 'Stephi had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.',
      linkedInPath: '',
    },
    {
      name: 'Leo Löwenherz',
      project: 'Kochwelt',
      text: 'Stephi had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.',
      linkedInPath: '',
    },
    {
      name: 'Lara Lockenhaupt',
      project: 'DA Bubble',
      text: 'Stephi had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.',
      linkedInPath: '',
    },
  ];
}
