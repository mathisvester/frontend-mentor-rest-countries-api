import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'countries',
    loadComponent: () =>
      import('@rest-countries-api/countries/feature-list').then(
        (m) => m.CountriesListComponent
      ),
  },
  {
    path: 'countries/:id',
    loadComponent: () =>
      import('@rest-countries-api/countries/feature-list').then(
        (m) => m.CountriesListComponent
      ),
  },
];
