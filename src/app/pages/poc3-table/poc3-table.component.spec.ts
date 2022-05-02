import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Poc3TableComponent } from './poc3-table.component';

describe('Poc3TableComponent', () => {

  let component: Poc3TableComponent;
  let fixture: ComponentFixture<Poc3TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poc3TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc3TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});