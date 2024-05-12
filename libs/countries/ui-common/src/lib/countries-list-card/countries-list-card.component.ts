import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Country } from '@rest-countries-api/countries-domain';
import { DescriptionListComponent } from '@rest-countries-api/ui-common';

@Component({
  selector: 'lib-countries-list-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DescriptionListComponent],
  templateUrl: './countries-list-card.component.html',
  styleUrl: './countries-list-card.component.scss',
})
export class CountriesListCardComponent {
  @Input({ required: true }) country: Country | undefined;
  @Output() cardClick = new EventEmitter<string>();
}
