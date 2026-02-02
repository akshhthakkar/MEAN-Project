import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth'; // Importing from your auth.ts
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  loginObj = {
    email: '',
    password: '',
  };

  onLogin() {
    this.authService.login(this.loginObj).subscribe({
      next: (res: any) => {
        // Shows "Login Success"
        alert(res.message);

        // Save the security token
        localStorage.setItem('token', res.token);

        // Redirect to about page
        this.router.navigate(['/about']);
      },
      error: (err) => {
        // Shows "User not found" or "Invalid Password"
        alert('Error: ' + err.error.message);
      },
    });
  }
}
