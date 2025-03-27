import { Component } from '@angular/core';
import { Project } from "../../app/interfaces/project";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'DA Bubble',
      duration: '4 weeks',
      about: "This app is a Slack-inspired communication platform designed to enhance team collaboration in professional settings. It features an intuitive interface, real-time messaging, and robust channel organization, making it easy for teams to stay connected and work efficiently.",
      organization: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      experience: '',
      groupExperience: 'We worked together in a Team of  Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
    },
    {
      name: 'Elara',
      duration: '3 weeks',
      about: 'Join Elara in a simple but exciting Jump-and-Run game based on an object-oriented approach. Help her find fire crystals to unlock powerful fireballs and rescue the mystical Enchanted Grove.',
      organization: 'I organized my work by outlining a rough structure, gathering all necessary components, building a framework, and then expanding upon it.',
      experience: 'This project deepened my understanding of Object-Oriented Programming (OOP), introduced me to browser events, and significantly enhanced my JavaScript skills. I applied these concepts practically, gaining valuable hands-on experience in modern web development techniques.',
      groupExperience: '',
    },
    {
      name: 'Join',
      duration: '5 weeks',
      about: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      organization: '',
      experience: '',
      groupExperience: 'I enhanced my skills in Angular, SCSS, and TypeScript. Additionally, I gained valuable insights into professional teamwork using Scrum methodology and industry-standard tools like Git for version control and Figma for design collaboration.',
    },
    {
      name: 'Pokédex',
      duration: '1 week',
      about: 'The Pokedex is a Pokémon trainer register that integrates with the PokeAPI. This interactive tool allows users to explore detailed information about over 1000 Pokemon. The project showcases effective API integration, data handling, and UI design, creating an engaging Pokémon encyclopedia.',
      organization: ' I systematically implemented all checklist items, ensuring that each task was completed with clean and well-structured code.',
      experience: 'This project enhanced my technical skills, particularly in system interoperability, data storage and processing, as well as control structures. I gained valuable experience in how systems communicate and refined my expertise in managing program flow and logic, preparing me for more complex challenges.',
      groupExperience: '',
    },
  ];
}
