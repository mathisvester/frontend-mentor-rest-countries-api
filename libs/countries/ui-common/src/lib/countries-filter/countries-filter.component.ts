import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { merge, scan, skip, startWith, Subject } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-countries-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './countries-filter.component.html',
  styleUrl: './countries-filter.component.scss',
})
export class CountriesFilterComponent {
  readonly regions = ['Africa', 'Asia', 'Europe', 'Oceania'];
  readonly dropdownButtonClick$$ = new Subject<void>();
  readonly selectedRegion = model('');

  isOpen = toSignal(
    merge(
      this.dropdownButtonClick$$,
      toObservable(this.selectedRegion).pipe(skip(1))
    ).pipe(
      scan(acc => !acc, false),
      startWith(false)
    ),
    { initialValue: false }
  );
}
