import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecsTechnologieComponent } from './recs-technologie.component';

describe('RecsTechnologieComponent', () => {
  let component: RecsTechnologieComponent;
  let fixture: ComponentFixture<RecsTechnologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecsTechnologieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecsTechnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
