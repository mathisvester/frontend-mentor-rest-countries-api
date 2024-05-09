import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CountriesDataService,
  CountriesService,
  Country,
} from '@rest-countries-api/countries-domain';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClientModule } from '@angular/common/http';
import { CountriesSearchComponent } from '../countries-search/countries-search.component';
import { CountriesFilterComponent } from '../countries-filter/countries-filter.component';
import { CountriesListCardComponent } from './countries-list-card/countries-list-card.component';

@Component({
  selector: 'lib-countries-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CountriesSearchComponent,
    CountriesFilterComponent,
    CountriesListCardComponent,
  ],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css',
  providers: [
    {
      provide: CountriesService,
      useClass: CountriesDataService,
    },
  ],
})
export class CountriesListComponent {
  readonly countries = toSignal(this.countriesService.getCountries(), {
    initialValue: [] as Country[],
  });

  constructor(private readonly countriesService: CountriesService) {}
}
