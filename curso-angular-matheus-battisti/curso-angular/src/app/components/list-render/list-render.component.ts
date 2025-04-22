import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: Animal[] = [];

  animal: Animal = {
    id: 0,
    name: 'Teste',
    type: 'Alguma Coisa',
    age: 10,
  };

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit() {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
    console.log(animal.id);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
