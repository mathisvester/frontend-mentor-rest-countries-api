import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '@rest-countries-api/countries-domain';
import { DescriptionListComponent } from '@rest-countries-api/ui-common';

@Component({
  selector: 'lib-countries-detail-description-list',
  standalone: true,
  imports: [CommonModule, DescriptionListComponent],
  templateUrl: './countries-detail-description-list.component.html',
  styleUrl: './countries-detail-description-list.component.scss',
})
export class CountriesDetailDescriptionListComponent {
  @Input({ required: true }) country: Country | undefined;
}
