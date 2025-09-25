import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // adjust path
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isExercicesOpen = false;
  isLoggedIn = false;
  user: any = null;

  private sub?: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.sub = this.authService.currentUser$.subscribe((user) => {
      this.user = user;
      this.isLoggedIn = !!user;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  toggleExercicesDropdown() {
    this.isExercicesOpen = !this.isExercicesOpen;
  }

  logOut() {
    this.authService.logOut();
  }
}
