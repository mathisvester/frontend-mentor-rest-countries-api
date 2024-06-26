import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesSearchComponent } from './countries-search.component';

describe('CountriesSearchComponent', () => {
  let component: CountriesSearchComponent;
  let fixture: ComponentFixture<CountriesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
