import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../entities/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private readonly httpClient: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>('https://restcountries.com/v2/all');
  }

  findCountryByCountryCode(countryCode: string): Observable<Country> {
    return this.httpClient.get<Country>(
      `https://restcountries.eu/rest/v2/alpha/${countryCode}`
    );
  }
}
