import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>About Us</h1>
      <p>Welcome to our MEAN Stack application!</p>
      <p>This project is built with:</p>
      <ul>
        <li><strong>MongoDB</strong> - Database</li>
        <li><strong>Express.js</strong> - Backend Framework</li>
        <li><strong>Angular</strong> - Frontend Framework</li>
        <li><strong>Node.js</strong> - Runtime Environment</li>
      </ul>
    </div>
  `,
  styles: [
    `
      .about-container {
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
        margin-bottom: 1rem;
      }
      ul {
        color: #555;
        padding-left: 1.5rem;
      }
      li {
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class AboutComponent {}
