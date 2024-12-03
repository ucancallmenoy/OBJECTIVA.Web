import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
  isLoginView: boolean = true;
  passwordFieldType: string = 'password';

  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle('Log in | Objectiva');
  }

  homepage() {
    this.router.navigate(['/homepage']);
  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
