import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesFeatureDetailComponent } from './countries-feature-detail.component';

describe('CountriesFeatureDetailComponent', () => {
  let component: CountriesFeatureDetailComponent;
  let fixture: ComponentFixture<CountriesFeatureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesFeatureDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
