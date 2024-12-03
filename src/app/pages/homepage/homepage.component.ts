import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('Objectiva - Learn OOP for Free');
  }
  selectedDifficulty: string | null = null;

  ngOnInit(): void {
    this.selectedDifficulty = 'abstraction';
  }

  toQuiz() { 
    this.router.navigate(['/quiz']);
  }

  selectDifficulty(difficulty: string) {
    this.selectedDifficulty = difficulty;
  }
}
