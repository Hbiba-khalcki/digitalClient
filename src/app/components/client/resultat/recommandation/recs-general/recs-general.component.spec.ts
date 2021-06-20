import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecsGeneralComponent } from './recs-general.component';

describe('RecsGeneralComponent', () => {
  let component: RecsGeneralComponent;
  let fixture: ComponentFixture<RecsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecsGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
