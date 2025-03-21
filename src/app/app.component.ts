import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';

  ngOnInit(){
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }
}


