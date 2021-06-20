import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecsOperationComponent } from './recs-operation.component';

describe('RecsOperationComponent', () => {
  let component: RecsOperationComponent;
  let fixture: ComponentFixture<RecsOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecsOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecsOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
