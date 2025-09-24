import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  parentMessage: string = 'Ici le parent balance des infos intra ENFANT';
  counterParent: number = 0;
  childNotification: string | null = null;

  increaseCounter() {
    this.counterParent++;
  }

  decreaseCounter() {
    if (this.counterParent > 0) {
      this.counterParent--;
    }
  }

  //! Reaction dans le parent à la notification de l'enfant (l'event custom)
  handleNotification(message: string) {
    console.log(message);
    this.childNotification = message;
  }
}
