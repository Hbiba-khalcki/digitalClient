import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireContactComponent } from './formulaire-contact.component';

describe('FormulaireContactComponent', () => {
  let component: FormulaireContactComponent;
  let fixture: ComponentFixture<FormulaireContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
