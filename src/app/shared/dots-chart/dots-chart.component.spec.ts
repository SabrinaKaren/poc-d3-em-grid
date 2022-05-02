import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DotsChartComponent } from './dots-chart.component';

describe('DotsChartComponent', () => {

  let component: DotsChartComponent;
  let fixture: ComponentFixture<DotsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});