import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Poc2GridComponent } from './poc2-grid.component';

describe('Poc2GridComponent', () => {

  let component: Poc2GridComponent;
  let fixture: ComponentFixture<Poc2GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poc2GridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc2GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});