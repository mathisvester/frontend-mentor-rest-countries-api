import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-countries-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries-filter.component.html',
  styleUrl: './countries-filter.component.css',
})
export class CountriesFilterComponent {}
