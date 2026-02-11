import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contact: ContactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {
    emailjs.init('y_annE4nhy38wNofg');
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', this.contact);

      emailjs.send('service_r1tomza', 'template_u46cz3v', {
        from_name: this.contact.name,
        from_email: this.contact.email,
        phone: this.contact.phone,
        company: this.contact.company,
        subject: this.contact.subject,
        message: this.contact.message
      }).then((response) => {
        console.log('Email sent successfully:', response);
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        this.resetForm();
      }).catch((error) => {
        console.error('Error sending email:', error);
        alert('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.');
      });
    }
  }

  private resetForm() {
    this.contact = {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    };
  }
}
