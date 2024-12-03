import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent {
  constructor(private router: Router) {}

  introduction(){
    this.router.navigate(['introduction']);
  }
  abstraction(){
    this.router.navigate(['abstraction']);
  } 
  encapsulation(){
    this.router.navigate(['encapsulation']);
  }
  inheritance(){
    this.router.navigate(['inheritance']);
  }
  polymorphism(){
    this.router.navigate(['polymorphism']);
  }
}
