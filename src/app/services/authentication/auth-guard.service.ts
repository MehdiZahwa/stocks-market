import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    // Check to see if a user is logged in
    if (this.authService.isLoggedIn) {
      // If they do, return true and allow the user to load app
      return true;
    }
    // If not, they redirect them to 404 page
    this.router.navigate(['/none']);
    return false;
  }
}
