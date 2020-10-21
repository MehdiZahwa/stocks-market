import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(public dialog: MatDialog, private authService: AuthService) {}
  loggedIn = this.authService.isLoggedIn;
  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '45%',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
