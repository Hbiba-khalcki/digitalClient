import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDeleteComponent } from './expert-delete.component';

describe('ExpertDeleteComponent', () => {
  let component: ExpertDeleteComponent;
  let fixture: ComponentFixture<ExpertDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
