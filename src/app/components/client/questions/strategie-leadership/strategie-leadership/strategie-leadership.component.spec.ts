import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategieLeadershipComponent } from './strategie-leadership.component';

describe('StrategieLeadershipComponent', () => {
  let component: StrategieLeadershipComponent;
  let fixture: ComponentFixture<StrategieLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategieLeadershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategieLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
