import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResPerTechnologieComponent } from './res-per-technologie.component';

describe('ResPerTechnologieComponent', () => {
  let component: ResPerTechnologieComponent;
  let fixture: ComponentFixture<ResPerTechnologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResPerTechnologieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResPerTechnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
