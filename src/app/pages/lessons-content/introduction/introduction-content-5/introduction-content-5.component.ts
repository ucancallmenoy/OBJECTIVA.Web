import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-introduction-content-5',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './introduction-content-5.component.html',
  styleUrl: './introduction-content-5.component.css'
})
export class IntroductionContent5Component {
// Track the visible sections
visibleSections: number = 1;

// Method to show the next section
showNextSection(sectionId: string) {
  this.visibleSections++;
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100); // Delay to ensure DOM updates
}
}
