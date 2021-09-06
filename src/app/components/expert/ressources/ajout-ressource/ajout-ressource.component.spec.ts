import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRessourceComponent } from './ajout-ressource.component';

describe('AjoutRessourceComponent', () => {
  let component: AjoutRessourceComponent;
  let fixture: ComponentFixture<AjoutRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
