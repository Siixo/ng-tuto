import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css'],
  imports: [CommonModule, RouterModule],
})
export class Exercice3Component {
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
