import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friend',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
})
export class FriendComponent {
  listFriendsCreationStatus = 'Aucun ami';
  textInput = ''; // <-- must exist
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
