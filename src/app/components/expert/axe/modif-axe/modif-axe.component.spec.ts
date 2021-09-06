import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAxeComponent } from './modif-axe.component';

describe('ModifAxeComponent', () => {
  let component: ModifAxeComponent;
  let fixture: ComponentFixture<ModifAxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
