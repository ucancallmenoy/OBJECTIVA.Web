import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-encapsulation-content-2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './encapsulation-content-2.component.html',
  styleUrl: './encapsulation-content-2.component.css'
})
export class EncapsulationContent2Component {
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
