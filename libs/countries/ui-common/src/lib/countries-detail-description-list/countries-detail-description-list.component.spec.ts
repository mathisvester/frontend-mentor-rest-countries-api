import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesDetailDescriptionListComponent } from './countries-detail-description-list.component';

describe('CountriesDetailDescriptionListComponent', () => {
  let component: CountriesDetailDescriptionListComponent;
  let fixture: ComponentFixture<CountriesDetailDescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesDetailDescriptionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesDetailDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
