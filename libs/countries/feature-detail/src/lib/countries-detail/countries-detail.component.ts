import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonComponent, PageComponent } from '@rest-countries-api/ui-common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CountriesDataService,
  CountriesService,
} from '@rest-countries-api/countries-domain';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  CountriesDetailBorderCountriesComponent,
  CountriesDetailDescriptionListComponent,
} from '@rest-countries-api/countries-ui-common';

@Component({
  selector: 'lib-countries-detail',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    ButtonComponent,
    NgOptimizedImage,
    CountriesDetailDescriptionListComponent,
    CountriesDetailBorderCountriesComponent,
  ],
  templateUrl: './countries-detail.component.html',
  styleUrl: './countries-detail.component.scss',
  providers: [
    {
      provide: CountriesService,
      useClass: CountriesDataService,
    },
  ],
})
export class CountriesDetailComponent {
  readonly countryCode$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('countryCode'))
  );

  readonly country$ = this.countryCode$.pipe(
    switchMap(countryCode => {
      if (countryCode) {
        return this.countriesService.findCountryByCountryCode(countryCode);
      } else {
        throw new Error('Country code must be defined!');
      }
    }),
    catchError(() => of(null))
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly countriesService: CountriesService
  ) {}

  navigateToList() {
    this.router.navigate(['/countries']);
  }
}
