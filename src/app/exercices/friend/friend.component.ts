import { Component } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
})
export class FriendComponent {
  listFriendsCreationStatus: string = 'Aucun ami';
  typedText: string = '';
  isButtonDisabled: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = true;
    }, 10000);
  }

  onInputKeyup(event: Event) {
    const input = event.target as HTMLInputElement;
    this.typedText = input.value;
  }

  onAddFriend() {
    this.listFriendsCreationStatus = 'Votre ami a été ajouté ! 🥳 ';
  }
}
