import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Poc1TableComponent } from './poc1-table.component';

describe('Poc1TableComponent', () => {

  let component: Poc1TableComponent;
  let fixture: ComponentFixture<Poc1TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poc1TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc1TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});