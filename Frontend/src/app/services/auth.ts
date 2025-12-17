import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';
  private http = inject(HttpClient);

  register(userDetails: any) {
    return this.http.post(`${this.baseUrl}/register`, userDetails);
  }

  login(userDetails: any) {
    return this.http.post(`${this.baseUrl}/login`, userDetails);
  }
}
