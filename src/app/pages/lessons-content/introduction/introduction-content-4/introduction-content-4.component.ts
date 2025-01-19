import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LessonProgressService } from '../../../../services/lesson-progress.service'; // copy

@Component({
  selector: 'app-introduction-content-4',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './introduction-content-4.component.html',
  styleUrl: './introduction-content-4.component.css'
})
export class IntroductionContent4Component {

constructor(private progressService: LessonProgressService) {}
// Track the visible sections
visibleSections: number = 1;

// Method to show the next section
showNextSection(sectionId: string) {
  this.visibleSections++;
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100); // Delay to ensure DOM updates

  if (this.visibleSections === 7) { // Change the number of depending on the last number of the button
    this.progressService.updateProgress('intro-lesson-3', true).subscribe({
      next: (response) => console.log('Progress updated successfully'),
      error: (error) => console.error('Error updating progress:', error)
    });
  }
}
}
