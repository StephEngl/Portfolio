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
  mailTest = false;

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
    if (ngForm.submitted && ngForm.form.valid && this.isPrivacyAccepted && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(this.post, this.contactData)
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } 
  //   else if (ngForm.submitted && ngForm.form.valid && this.isPrivacyAccepted && this.mailTest) {
  // console.log("Mail versendet");

  //     ngForm.resetForm();
  //   }
  }

}
