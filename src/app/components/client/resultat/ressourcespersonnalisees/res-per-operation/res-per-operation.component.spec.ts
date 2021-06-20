import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResPerOperationComponent } from './res-per-operation.component';

describe('ResPerOperationComponent', () => {
  let component: ResPerOperationComponent;
  let fixture: ComponentFixture<ResPerOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResPerOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResPerOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
