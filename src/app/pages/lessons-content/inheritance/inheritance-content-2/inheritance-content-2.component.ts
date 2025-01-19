import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LessonProgressService } from '../../../../services/lesson-progress.service'; // copy

@Component({
  selector: 'app-inheritance-content-2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inheritance-content-2.component.html',
  styleUrl: './inheritance-content-2.component.css'
})
export class InheritanceContent2Component {
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
    this.progressService.updateProgress('inheritance-lesson-2', true).subscribe({
      next: (response) => console.log('Progress updated successfully'),
      error: (error) => console.error('Error updating progress:', error)
    });
  }
}
}
