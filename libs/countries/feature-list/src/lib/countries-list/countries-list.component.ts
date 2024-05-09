import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CountriesDataService,
  CountriesService,
  Country,
} from '@rest-countries-api/countries-domain';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { PageComponent } from '@rest-countries-api/ui-common';
import { Router } from '@angular/router';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import {
  CountriesFilterComponent,
  CountriesListCardComponent,
  CountriesSearchComponent,
} from '@rest-countries-api/countries-ui-common';

@Component({
  selector: 'lib-countries-list',
  standalone: true,
  imports: [
    CommonModule,
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
  readonly currentSearchString = signal<string>('');
  readonly selectedRegion = signal<string>('');

  readonly countries = toSignal(
    combineLatest([
      toObservable(this.currentSearchString).pipe(
        debounceTime(200),
        distinctUntilChanged(),
      ),
      toObservable(this.selectedRegion),
    ]).pipe(
      switchMap(([currentSearchString, selectedRegion]) => {
        if (currentSearchString) {
          return this.countriesService.findCountriesByName(currentSearchString);
        } else if (selectedRegion) {
          return this.countriesService.findCountriesByRegion(selectedRegion);
        } else {
          return this.countriesService.getCountries();
        }
      }),
    ),
    { initialValue: [] as Country[] },
  );

  constructor(
    private readonly countriesService: CountriesService,
    private readonly router: Router,
  ) {}

  navigateToDetail(countryCode: string) {
    this.router.navigate(['/countries', countryCode]);
  }
}
