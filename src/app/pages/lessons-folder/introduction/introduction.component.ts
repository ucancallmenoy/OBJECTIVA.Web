import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../services/lesson-progress.service'; // copy

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent implements OnInit {
  constructor(private router: Router, private progressService: LessonProgressService) {} 
  lessonProgress: { [key: string]: boolean } = {}; // copy

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
