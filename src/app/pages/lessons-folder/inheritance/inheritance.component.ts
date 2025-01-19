import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LessonProgressService } from '../../../services/lesson-progress.service'; // copy

@Component({
  selector: 'app-inheritance',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inheritance.component.html',
  styleUrl: './inheritance.component.css'
})
export class InheritanceComponent implements OnInit{
  constructor(private router: Router, private progressService: LessonProgressService) {} 
  lessonProgress: { [key: string]: boolean } = {}; // copy
  
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
