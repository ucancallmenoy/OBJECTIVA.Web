import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-polymorphism-content-4',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './polymorphism-content-4.component.html',
  styleUrl: './polymorphism-content-4.component.css'
})
export class PolymorphismContent4Component {
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
