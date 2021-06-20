import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResPerStrategieComponent } from './res-per-strategie.component';

describe('ResPerStrategieComponent', () => {
  let component: ResPerStrategieComponent;
  let fixture: ComponentFixture<ResPerStrategieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResPerStrategieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResPerStrategieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
