// 1. Create auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

interface LoginResponse {
  token: string;
  // add other response fields as needed
}

interface RegisterResponse {
  message: string;
  // add other response fields as needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://127.0.0.1:8000/api';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.isAuthenticatedSubject.next(!!this.getToken());
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, { email, password })
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
          this.isAuthenticatedSubject.next(true);
        })
      );
  }

  register(userData: any): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.API_URL}/register`, userData);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login-register']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}