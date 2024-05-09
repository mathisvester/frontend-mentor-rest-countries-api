import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../entities/country';
import { data } from './data';

@Injectable({
  providedIn: 'root',
})
export class CountriesDataService {
  getCountries(): Observable<Country[]> {
    return of(data);
  }
}
