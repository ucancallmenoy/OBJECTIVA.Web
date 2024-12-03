import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.css'
})
export class EncapsulationComponent {
  constructor(private router: Router) {}

  introductionOverview(){
    this.router.navigate(['introduction-overview']);
  }
}
