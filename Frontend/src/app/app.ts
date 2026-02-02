import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  onSignOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
