import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-countries-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './countries-search.component.html',
  styleUrl: './countries-search.component.scss',
})
export class CountriesSearchComponent {
  searchString = '';
  @Output() searchStringChange = new EventEmitter<string>();
}
