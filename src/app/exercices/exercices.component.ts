import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInterpolation } from './text-interpolation/text-interpolation.component';
import { FriendComponent } from './friend/friend.component';

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [CommonModule, TextInterpolation, FriendComponent],
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css'],
})
export class ExercicesComponent {}
