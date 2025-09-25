import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exercice5',
  templateUrl: './exercice5.component.html',
  styleUrls: ['./exercice5.component.css'],
  standalone: true,
  imports: [CommonModule, ParentComponent, RouterModule],
})
export class Exercice5Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
