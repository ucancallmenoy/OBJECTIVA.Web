import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polymorphism',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './polymorphism.component.html',
  styleUrl: './polymorphism.component.css'
})
export class PolymorphismComponent {
  constructor(private router: Router) {}

  lesson1Overview() {
    this.router.navigate(['understanding-polymorphism-overview']);
  }
  lesson2Overview() {
    this.router.navigate(['compile-time-polymorphism-overview']);
  }
  lesson3Overview() {
    this.router.navigate(['runtime-polymorphism-overview']);
  }
  lesson4Overview() {
    this.router.navigate(['advanced-polymorphic-concepts-overview']);
  }
  lesson5Overview() {
    this.router.navigate(['polymorphism-with-interfaces-overview']);
  }
  lesson6Overview() {
    this.router.navigate(['polymorphism-implementation-in-java-overview']);
  }

}
