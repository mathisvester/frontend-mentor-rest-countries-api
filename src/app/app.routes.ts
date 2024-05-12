import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'countries',
    loadComponent: () =>
      import('@rest-countries-api/countries-feature-list').then(
        m => m.CountriesListComponent
      ),
  },
  {
    path: 'countries/:countryCode',
    loadComponent: () =>
      import('@rest-countries-api/countries-feature-detail').then(
        m => m.CountriesDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/countries',
  },
];
