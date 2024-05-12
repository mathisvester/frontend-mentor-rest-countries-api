import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesDetailBorderCountriesComponent } from './countries-detail-border-countries.component';

describe('CountriesDetailBorderCountriesComponent', () => {
  let component: CountriesDetailBorderCountriesComponent;
  let fixture: ComponentFixture<CountriesDetailBorderCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesDetailBorderCountriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesDetailBorderCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
