import { Component } from '@angular/core';
import { Database, set, ref, push, onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Task {
  title: string;
  status: string;
  name: string;
  surname: string;
  imageUrl: string;
}

@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list-firebase.component.html',
  styleUrls: ['./task-list-firebase.component.css'],
})
export class TaskListFirebaseComponent {
  newTask: Task = {
    title: '',
    status: 'pending',
    name: '',
    surname: '',
    imageUrl: '',
  };
  tasks: { title: ''; status: 'pending'; name: ''; surname: ''; imageUrl: '' }[] = []; // Liste des tâches

  constructor(private db: Database) {
    const tasksRef = ref(this.db, 'tasks');
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.tasks = data ? Object.values(data) : [];
      console.log(this.tasks);
    });
  }

  addTask() {
    if (this.newTask.title.trim()) {
      const tasksRef = ref(this.db, 'tasks');
      const newTaskRef = push(tasksRef);
      set(newTaskRef, this.newTask); // Enregistrer l'objet newTask
      this.newTask = {
        title: '',
        status: 'pending',
        name: '',
        surname: '',
        imageUrl: '',
      }; // Réinitialiser le champ
    }
  }
}
