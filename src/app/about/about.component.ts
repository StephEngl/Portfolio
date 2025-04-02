import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, NgxTypedJsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  currentImage: string = 'url("../../assets/icons/icon_location.svg")';
  fadeClass: string = 'fade-in';

  toggleIcon(index: number): void {
    this.fadeClass = 'fade-out';
    setTimeout(() => {
      if (index === 0) {
        this.currentImage = 'url("../../assets/icons/icon_location.svg")';
      } else if (index === 1) {
        this.currentImage = 'url("../../assets/icons/icon_remote.svg")';
      }

      this.fadeClass = 'fade-in';
    }, 200); // Dauer muss mit der Transition-Zeit übereinstimmen
  }
}
