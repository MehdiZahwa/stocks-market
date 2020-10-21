import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  login(email, password) {
    this.authService.login(email.value, password.value);

    if (this.authService.isLoggedIn) {
      window.location.reload();
      this.close();
    }
  }
}
