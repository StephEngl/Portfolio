import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactData } from "../interfaces/contact";



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData: ContactData= {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('läuft');
  }
}
