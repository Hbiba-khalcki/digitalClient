import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecsCultureComponent } from './recs-culture.component';

describe('RecsCultureComponent', () => {
  let component: RecsCultureComponent;
  let fixture: ComponentFixture<RecsCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecsCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecsCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
