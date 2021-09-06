import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRessourceComponent } from './liste-ressource.component';

describe('ListeRessourceComponent', () => {
  let component: ListeRessourceComponent;
  let fixture: ComponentFixture<ListeRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
