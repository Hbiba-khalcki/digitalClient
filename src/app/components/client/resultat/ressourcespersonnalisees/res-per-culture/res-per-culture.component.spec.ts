import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResPerCultureComponent } from './res-per-culture.component';

describe('ResPerCultureComponent', () => {
  let component: ResPerCultureComponent;
  let fixture: ComponentFixture<ResPerCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResPerCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResPerCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
