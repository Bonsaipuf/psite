import { Component, OnInit, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = 'pSite';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  readonly panelOpenState = signal(false);

  copiaEmail() {
    const email = 'bonaldo.bonny.alessandro@gmail.com';
    navigator.clipboard.writeText(email).then(
      () => {
        this.snackBar.open('Email copiata negli appunti', 'X', {
          duration: 1000, // Durata in millisecondi
          verticalPosition: 'bottom', // Posizione in alto
          horizontalPosition: 'right', // Posizione a destra
        });
      },
      () => {
        this.snackBar.open('Errore durante la copia dell\'email', 'X', {
          duration: 1500,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
