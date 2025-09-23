import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hobbies {
  reading: string;
  cycling: string;
  cooking: string;
}

interface Person {
  img: string;
  name: string;
  status: string;
  age: number;
  bio: string;
  reputation: string;
}
@Component({
  selector: 'app-text-interpolation',
  imports: [CommonModule],
  templateUrl: './text-interpolation.component.html',
  styleUrl: './text-interpolation.component.css',
})
export class TextInterpolation {
  title: string = 'Bienvenue dans notre super mega cours Angular';
  description: string =
    "La text interpolation vous permet d'afficher des données dynamiques dans votre template.";
  currentDate: Date = new Date();

  username: string = 'John Doe';

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  hobbies: Hobbies = {
    reading: 'Intermédiaire',
    cycling: 'Avancé',
    cooking: 'Débutant',
  };

  // Méthode appelée dans le template
  getWelcomeMessage(): string {
    return `Bienvenue, ${this.username}, dans cette leçon d'Angular!`;
  }

  person: Person = {
    img: '/Spodermen.gif',
    name: 'Spodermen',
    status: 'offline',
    age: 25,
    bio: 'Spodermen',
    reputation: 'Legend',
  };
}
