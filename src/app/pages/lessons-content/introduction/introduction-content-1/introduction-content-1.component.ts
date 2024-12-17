import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-introduction-content-1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './introduction-content-1.component.html',
  styleUrl: './introduction-content-1.component.css'
})
export class IntroductionContent1Component {
// Boolean flag to control visibility of the second container
isSecondContainerVisible: boolean = false;
isThirdContainerVisible: boolean = false;

// Method to toggle visibility
showSecondContainer(): void {
  this.isSecondContainerVisible = true;
}
showThirdContainer(): void {
  this.isThirdContainerVisible = true;
}

// Track the visible sections
visibleSections: number = 1;

// Method to show the next section
showNextSection(): void {
  this.visibleSections += 1;
}
}
