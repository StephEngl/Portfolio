import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-select-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './select-tech-stack.component.html',
  styleUrl: './select-tech-stack.component.scss',
})
export class SelectTechStackComponent {
  @Input() stackLabels: string[] = ['Frontend', 'Backend', 'Tools'];
  @Input() activeStack: string = 'Frontend';
  @Input() columnLayout = false;
  @Output() selectedStack = new EventEmitter<string>();

  select(stack: string) {
    this.activeStack = stack;
    this.selectedStack.emit(stack);
  }
}
