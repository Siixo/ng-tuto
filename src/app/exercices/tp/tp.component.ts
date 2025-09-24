import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css'],
  imports: [CommonModule],
})
export class TpComponent {
  isButtonOn = false;
  myList: Array<Number> = [];
  i: number = 1; //On commence à 1 pour vérifier la condition "myList.length + i = 1" à [0] du tableau

  changeButton() {
    this.isButtonOn = !this.isButtonOn; // On change l'état du bouton ce qui va changer le texte du bouton grace au binding
    this.myList.push(this.myList.length + 1); //On ajoute length + i dans le tableau à chaque fois
  }
  isFifthElement(i: number) {
    return i >= 4;
  }
}
