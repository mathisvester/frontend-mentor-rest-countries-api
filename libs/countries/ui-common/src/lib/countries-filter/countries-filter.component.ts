import { Component, ElementRef, Inject, model, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  filter,
  fromEvent,
  map,
  merge,
  Observable,
  scan,
  startWith,
  Subject,
} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

export type DropdownEvent = 'TOGGLE' | 'HIDE';

@Component({
  selector: 'lib-countries-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './countries-filter.component.html',
  styleUrl: './countries-filter.component.scss',
})
export class CountriesFilterComponent {
  @ViewChild('dropdownToggle', { static: true }) dropdownToggle:
    | ElementRef<HTMLButtonElement>
    | undefined;

  readonly regions = ['Africa', 'Asia', 'Europe', 'Oceania'];
  readonly dropdownButtonClick$$ = new Subject<void>();
  readonly selectedRegion = model('');

  private readonly toggleDropdown$: Observable<DropdownEvent> =
    this.dropdownButtonClick$$.pipe(map(() => 'TOGGLE'));
  private readonly hideDropdown$: Observable<DropdownEvent> = fromEvent(
    this.document,
    'click'
  ).pipe(
    filter(e => e.target !== this.dropdownToggle?.nativeElement),
    map(() => 'HIDE')
  );

  readonly isOpen = toSignal(
    merge(this.toggleDropdown$, this.hideDropdown$).pipe(
      scan((acc, value) => {
        switch (value) {
          case 'TOGGLE':
            return !acc;
          case 'HIDE':
            return false;
          default:
            return acc;
        }
      }, false),
      startWith(false)
    ),
    { initialValue: false }
  );

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}
}
