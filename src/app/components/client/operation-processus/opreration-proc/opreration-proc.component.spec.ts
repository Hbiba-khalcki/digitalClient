import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OprerationProcComponent } from './opreration-proc.component';

describe('OprerationProcComponent', () => {
  let component: OprerationProcComponent;
  let fixture: ComponentFixture<OprerationProcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OprerationProcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OprerationProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
