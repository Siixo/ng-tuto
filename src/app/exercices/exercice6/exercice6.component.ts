import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exercice6',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './exercice6.component.html',
  styleUrls: ['./exercice6.component.css'],
})
export class Exercice6Component {
  listFriendsCreationStatus = 'Aucun ami';
  textInput = '';
  isButtonDisabled = false;

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = true;
    }, 10000);
  }

  onAddFriend() {
    this.listFriendsCreationStatus = `Votre ami "${this.textInput}" a été ajouté ! 🥳`;
    this.textInput = '';
  }
}
