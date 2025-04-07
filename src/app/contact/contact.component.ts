import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactData } from '../interfaces/contact';
import { TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

/**
 * ContactComponent is a standalone Angular component that provides a contact form.
 * It handles form submission, privacy acceptance, and displays feedback messages.
 */
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
  contactData: ContactData = {
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

  /**
   * Handles form submission. Sends contact data to the server if the form is valid
   * and privacy policy is accepted. Displays feedback based on success or failure.
   *
   * @param {NgForm} ngForm - The Angular form object containing user input and validation state.
   */
  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid && this.isPrivacyAccepted) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.onMessageSent(ngForm);
          },
          error: (error) => {
            console.error(error);
            this.showFeedback('contact.errorMessage');
          },
        });
    }
  }

  /**
   * Handles the actions to be performed after a successful message submission.
   * Resets the form, updates the submission state, and displays a success feedback message.
   *
   * @param {NgForm} ngForm - The Angular form object to reset after submission.
   */
  onMessageSent(ngForm: NgForm) {
    this.formSubmitted = false;
    ngForm.resetForm();
    this.showFeedback('contact.successMessage');
  }

  /**
   * Displays a feedback message in a toast notification. The message is determined
   * by the provided translation key. The toast disappears after a timeout.
   *
   * @param {string} translationKey - The key used to retrieve the translated feedback message.
   */
  showFeedback(translationKey: string) {
    this.toastMessage = translationKey;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
      this.toastMessage = '';
    }, 5000);
  }
}
