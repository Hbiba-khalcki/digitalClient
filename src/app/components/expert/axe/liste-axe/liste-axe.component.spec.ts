import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAxeComponent } from './liste-axe.component';

describe('ListeAxeComponent', () => {
  let component: ListeAxeComponent;
  let fixture: ComponentFixture<ListeAxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
