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
      `https://restcountries.com/v2/alpha/${countryCode}`
    );
  }

  findCountriesByName(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(
      `https://restcountries.com/v2/name/${name}`
    );
  }

  findCountriesByRegion(region: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(
      `https://restcountries.com/v2/region/${region}`
    );
  }
}
