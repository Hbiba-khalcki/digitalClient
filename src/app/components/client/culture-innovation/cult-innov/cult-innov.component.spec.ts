import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultInnovComponent } from './cult-innov.component';

describe('CultInnovComponent', () => {
  let component: CultInnovComponent;
  let fixture: ComponentFixture<CultInnovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultInnovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultInnovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
