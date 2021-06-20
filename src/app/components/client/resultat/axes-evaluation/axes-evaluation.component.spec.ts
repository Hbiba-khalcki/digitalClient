import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxesEvaluationComponent } from './axes-evaluation.component';

describe('AxesEvaluationComponent', () => {
  let component: AxesEvaluationComponent;
  let fixture: ComponentFixture<AxesEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxesEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AxesEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
