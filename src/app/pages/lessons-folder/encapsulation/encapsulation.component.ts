import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../services/lesson-progress.service'; // copy

@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.css'
})
export class EncapsulationComponent implements OnInit{
  constructor(private router: Router, private progressService: LessonProgressService) {} 
  lessonProgress: { [key: string]: boolean } = {}; // copy

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

  // To load the progress of the user
  ngOnInit() {
    this.loadProgress();
  }

  loadProgress() {
    this.progressService.getProgress().subscribe({
      next: (response) => {
        this.lessonProgress = response.data;
      },
      error: (error) => console.error('Error loading progress:', error)
    });
  }
}
