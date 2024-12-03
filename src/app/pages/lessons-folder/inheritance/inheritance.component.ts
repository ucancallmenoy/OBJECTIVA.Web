import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inheritance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inheritance.component.html',
  styleUrl: './inheritance.component.css'
})
export class InheritanceComponent {
  // Define the levels
  levels = [
    { name: 'Level 1' },
    { name: 'Level 2' },
    { name: 'Level 3' },
    { name: 'Level 4' },
    { name: 'Level 5' },
  ];

  currentLevel = 0; // Track the current level

  // Set the clicked level
  setLevel(index: number) {
    if (index <= this.currentLevel + 1) {
      this.currentLevel = index;
    }
  }
}
