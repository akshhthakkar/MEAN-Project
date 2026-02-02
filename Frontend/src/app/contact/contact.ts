import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>
      <div class="contact-info">
        <p><strong>Email:</strong> contact&#64;example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>
    </div>
  `,
  styles: [
    `
      .contact-container {
        max-width: 600px;
        margin: 2rem auto;
        padding: 2rem;
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #667eea;
        margin-bottom: 1rem;
      }
      p {
        color: #555;
        line-height: 1.6;
        margin-bottom: 0.5rem;
      }
      .contact-info {
        margin-top: 1.5rem;
      }
    `,
  ],
})
export class ContactComponent {}
