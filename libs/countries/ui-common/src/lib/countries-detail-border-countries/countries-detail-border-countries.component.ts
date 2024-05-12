import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionListComponent } from '@rest-countries-api/ui-common';
import { Country } from '@rest-countries-api/countries-domain';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-countries-detail-border-countries',
  standalone: true,
  imports: [CommonModule, DescriptionListComponent, RouterLink],
  templateUrl: './countries-detail-border-countries.component.html',
  styleUrl: './countries-detail-border-countries.component.scss',
})
export class CountriesDetailBorderCountriesComponent {
  @Input({ required: true }) country: Country | undefined;
}
