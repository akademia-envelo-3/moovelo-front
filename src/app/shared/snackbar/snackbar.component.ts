import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar[message]',
  standalone: true,
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  imports: [MatIconModule],
})
export class SnackbarComponent {
  @Input() snackbarMessage!: string;

  snackBarRef = inject(MatSnackBarRef);
}
