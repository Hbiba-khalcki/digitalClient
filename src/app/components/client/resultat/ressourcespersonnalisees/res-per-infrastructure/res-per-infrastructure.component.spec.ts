import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResPerInfrastructureComponent } from './res-per-infrastructure.component';

describe('ResPerInfrastructureComponent', () => {
  let component: ResPerInfrastructureComponent;
  let fixture: ComponentFixture<ResPerInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResPerInfrastructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResPerInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
