import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Country } from '../entities/country';
import { data } from './data';

@Injectable({
  providedIn: 'root',
})
export class CountriesDataService {
  getCountries(): Observable<Country[]> {
    return of(data);
  }

  findCountryByCountryCode(countryCode: string): Observable<Country | null> {
    return this.getCountries().pipe(
      map(
        (countries) =>
          countries.find(
            (country) =>
              country.alpha2Code === countryCode ||
              country.alpha3Code === countryCode ||
              country.numericCode === countryCode
          ) ?? null
      )
    );
  }
}
