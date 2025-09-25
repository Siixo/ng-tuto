import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private auth: Auth, private router: Router) {}

  signIn() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.authService['currentUserSubject'].next(userCredential.user);
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Erreur de connexion:', error);
      });
  }
}
