import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '@rest-countries-api/countries-domain';

@Component({
  selector: 'lib-countries-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries-list-card.component.html',
  styleUrl: './countries-list-card.component.css',
})
export class CountriesListCardComponent {
  @Input({ required: true }) country: Country | undefined;
  @Output() cardClick = new EventEmitter<string>();
}
