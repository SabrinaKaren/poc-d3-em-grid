import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToTestsComponent } from './to-tests.component';

describe('ToTestsComponent', () => {

  let component: ToTestsComponent;
  let fixture: ComponentFixture<ToTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});