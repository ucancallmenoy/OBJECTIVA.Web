import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LessonProgressService } from '../../../services/lesson-progress.service'; // copy

@Component({
  selector: 'app-abstraction',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abstraction.component.html',
  styleUrl: './abstraction.component.css'
})
export class AbstractionComponent implements OnInit{
  constructor(private router: Router, private progressService: LessonProgressService) {} 
  lessonProgress: { [key: string]: boolean } = {}; // copy

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
