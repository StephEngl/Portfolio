import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactData } from "../interfaces/contact";
import { TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  http = inject(HttpClient);
  isPrivacyAccepted = false;
  formSubmitted = false;
  showToast = false;
  toastMessage = '';

  contactData: ContactData= {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://stephanie-englberger.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid && this.isPrivacyAccepted) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.formSubmitted = false;
            ngForm.resetForm();
            this.showFeedback('contact.successMessage');
          },
          error: (error) => {
            console.error(error);
            this.showFeedback('contact.errorMessage');
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  showFeedback(translationKey: string) {
    this.toastMessage = translationKey; 
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
      this.toastMessage = '';
    }, 5000);
  }
}
