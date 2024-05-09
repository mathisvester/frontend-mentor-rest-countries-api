import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-countries-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './countries-filter.component.html',
  styleUrl: './countries-filter.component.css',
})
export class CountriesFilterComponent {
  @Output() regionChange = new EventEmitter<string>();
  region = '';
  regions = ['Africa', 'Asia', 'Europe', 'Oceania'];
}
