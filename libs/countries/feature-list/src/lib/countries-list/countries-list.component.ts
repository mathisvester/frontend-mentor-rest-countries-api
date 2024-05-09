import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CountriesDataService,
  CountriesService,
} from '@rest-countries-api/countries-domain';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { HttpClientModule } from '@angular/common/http';
import { CountriesSearchComponent } from '../countries-search/countries-search.component';
import { CountriesFilterComponent } from '../countries-filter/countries-filter.component';
import { CountriesListCardComponent } from './countries-list-card/countries-list-card.component';
import { PageComponent } from '@rest-countries-api/ui-common';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lib-countries-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CountriesSearchComponent,
    CountriesFilterComponent,
    CountriesListCardComponent,
    PageComponent,
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
  readonly selectedRegion = signal<string>('');

  readonly countries = toSignal(
    toObservable(this.selectedRegion).pipe(
      switchMap((selectedRegion) =>
        selectedRegion
          ? this.countriesService.findCountriesByRegion(selectedRegion)
          : this.countriesService.getCountries()
      )
    ),
    { initialValue: [] }
  );

  constructor(
    private readonly countriesService: CountriesService,
    private readonly router: Router
  ) {}

  navigateToDetail(countryCode: string) {
    this.router.navigate(['/countries', countryCode]);
  }
}
