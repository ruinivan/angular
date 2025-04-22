import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
    email: 'joaquim@email.com',
    role: 'Admin',
  };
  title = 'curso-angular';
}
