import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inheritance-content-3',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inheritance-content-3.component.html',
  styleUrl: './inheritance-content-3.component.css'
})
export class InheritanceContent3Component {
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
