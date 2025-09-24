import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css'],
})
export class ExercicesComponent {}
