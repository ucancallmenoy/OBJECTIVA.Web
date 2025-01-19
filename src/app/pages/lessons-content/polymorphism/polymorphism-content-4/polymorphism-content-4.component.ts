import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LessonProgressService } from '../../../../services/lesson-progress.service'; // copy

@Component({
  selector: 'app-polymorphism-content-4',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './polymorphism-content-4.component.html',
  styleUrl: './polymorphism-content-4.component.css'
})
export class PolymorphismContent4Component {
  constructor(private progressService: LessonProgressService) {}

// Track the visible sections
visibleSections: number = 1;

// Method to show the next section
showNextSection(sectionId: string) {
  this.visibleSections++;
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100); // Delay to ensure DOM updates

  if (this.visibleSections === 6) { // Change the number of depending on the last number of the button
    this.progressService.updateProgress('polymorphism-lesson-4', true).subscribe({
      next: (response) => console.log('Progress updated successfully'),
      error: (error) => console.error('Error updating progress:', error)
    });
  }
}
}
