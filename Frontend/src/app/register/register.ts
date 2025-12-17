import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth'; // Importing from your auth.ts
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);

  registerObj = {
    name: '',
    email: '',
    password: '',
  };

  onRegister() {
    this.authService.register(this.registerObj).subscribe({
      next: (res: any) => {
        // Shows "User Registered Successfully" from backend
        alert(res.message);
        this.router.navigate(['login']);
      },
      error: (err) => {
        // Shows "Email already exists" or other backend errors
        alert('Error: ' + err.error.message);
      },
    });
  }
}
