import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inheritance',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inheritance.component.html',
  styleUrl: './inheritance.component.css'
})
export class InheritanceComponent {
  constructor(private router: Router) {}
  
  lesson1Overview() {
    this.router.navigate(['understanding-inheritance-overview']);
  }
  lesson2Overview() {
    this.router.navigate(['single-inheritance-overview']);
  }
  lesson3Overview() {
    this.router.navigate(['types-of-inheritance-in-java-overview']);
  }
  lesson4Overview() {
    this.router.navigate(['methods-overriding-overview']);
  }
  lesson5Overview() {
    this.router.navigate(['advanced-inheritance-concepts-overview']);
  }
  lesson6Overview() {
    this.router.navigate(['inheritance-implementation-in-java-overview']);
  }
}
