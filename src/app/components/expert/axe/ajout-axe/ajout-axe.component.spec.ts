import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAxeComponent } from './ajout-axe.component';

describe('AjoutAxeComponent', () => {
  let component: AjoutAxeComponent;
  let fixture: ComponentFixture<AjoutAxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
