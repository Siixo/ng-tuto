import { Injectable } from '@angular/core';
import { Auth, User, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'; // ✅ add this

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
    });
  }

  get isLoggedIn$() {
    return this.currentUser$.pipe(map((user) => !!user));
  }

  logOut() {
    return signOut(this.auth).then(() => {
      this.currentUserSubject.next(null);
    });
  }
}
