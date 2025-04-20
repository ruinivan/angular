import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.show = true;
  }
}
