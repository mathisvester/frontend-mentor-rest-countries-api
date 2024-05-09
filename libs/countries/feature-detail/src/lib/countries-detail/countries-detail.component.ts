import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, PageComponent } from '@rest-countries-api/ui-common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CountriesDataService,
  CountriesService,
} from '@rest-countries-api/countries-domain';
import { catchError, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'lib-countries-detail',
  standalone: true,
  imports: [CommonModule, PageComponent, ButtonComponent],
  templateUrl: './countries-detail.component.html',
  styleUrl: './countries-detail.component.css',
  providers: [
    {
      provide: CountriesService,
      useClass: CountriesDataService,
    },
  ],
})
export class CountriesDetailComponent {
  countryCode$ = this.route.paramMap.pipe(
    map((paramMap) => paramMap.get('countryCode'))
  );

  country$ = this.countryCode$.pipe(
    switchMap((countryCode) => {
      if (countryCode) {
        return this.countriesService.findCountryByCountryCode(countryCode);
      } else {
        throw new Error('Country code must be defined! ');
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
