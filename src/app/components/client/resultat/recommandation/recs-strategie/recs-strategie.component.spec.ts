import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecsStrategieComponent } from './recs-strategie.component';

describe('RecsStrategieComponent', () => {
  let component: RecsStrategieComponent;
  let fixture: ComponentFixture<RecsStrategieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecsStrategieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecsStrategieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
