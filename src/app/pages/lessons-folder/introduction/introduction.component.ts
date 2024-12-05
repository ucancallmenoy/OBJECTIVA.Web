import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
  constructor(private router: Router) {}

  lesson1Overview(){
    this.router.navigate(['introduction-to-object-oriented-programming-overview']);
  }
  lesson2Overview(){
    this.router.navigate(['understanding-object-and-classes-overview']);
  }
  lesson3Overview(){
    this.router.navigate(['introduction-to-java-overview']);
  }
  lesson4Overview(){
    this.router.navigate(['basic-oop-concepts-in-java-overview']);
  }
  lesson5Overview(){
    this.router.navigate(['class-structure-and-access-overview']);
  }
  lesson6Overview(){
    this.router.navigate(['basic-object-oriented-design-overview']);
  }
  lesson7Overview(){
    this.router.navigate(['java-class-libraries-overview-overview']);
  }
  lesson8Overview(){
    this.router.navigate(['object-interactions-overview']);
  }
}
