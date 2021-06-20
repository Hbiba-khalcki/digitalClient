import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecsInfrastructureComponent } from './recs-infrastructure.component';

describe('RecsInfrastructureComponent', () => {
  let component: RecsInfrastructureComponent;
  let fixture: ComponentFixture<RecsInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecsInfrastructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecsInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
