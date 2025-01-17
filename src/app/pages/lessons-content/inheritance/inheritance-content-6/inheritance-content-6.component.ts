import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inheritance-content-6',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inheritance-content-6.component.html',
  styleUrl: './inheritance-content-6.component.css'
})
export class InheritanceContent6Component {
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
