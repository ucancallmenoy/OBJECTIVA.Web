import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-abstraction',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abstraction.component.html',
  styleUrl: './abstraction.component.css'
})
export class AbstractionComponent {
  constructor(private router: Router) {}

  lesson1Overview() {
    this.router.navigate(['understanding-abstraction-overview']);
  }
  lesson2Overview() {
    this.router.navigate(['abstract-classes-overview']);
  }
  lesson3Overview() {
    this.router.navigate(['interfaces-overview']);
  }
  lesson4Overview() {
    this.router.navigate(['abstraction-implementation-in-java-overview']);
  }
  
}
