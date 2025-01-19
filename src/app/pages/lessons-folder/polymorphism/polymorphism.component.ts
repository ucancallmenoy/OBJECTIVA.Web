import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../services/lesson-progress.service'; // copy

@Component({
  selector: 'app-polymorphism',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './polymorphism.component.html',
  styleUrl: './polymorphism.component.css'
})
export class PolymorphismComponent implements OnInit{ 
  constructor(private router: Router, private progressService: LessonProgressService) {} 
  lessonProgress: { [key: string]: boolean } = {}; // copy

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
