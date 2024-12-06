import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.css'
})
export class EncapsulationComponent {
  constructor(private router: Router) {}

  lesson1Overview() {
    this.router.navigate(['understanding-encapsulation-overview']);
  }
  lesson2Overview() {
    this.router.navigate(['access-modifiers-overview']);
  }
  lesson3Overview() {
    this.router.navigate(['getters-and-setters-overview']);
  }
  lesson4Overview() {
    this.router.navigate(['java-bean-standard-overview']);
  }
  lesson5Overview() {
    this.router.navigate(['data-validation-overview']);
  }
  lesson6Overview() {
    this.router.navigate(['encapsulation-implementation-in-java-overview']);
  }
}
