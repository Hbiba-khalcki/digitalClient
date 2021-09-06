import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRecommandationComponent } from './ajout-recommandation.component';

describe('AjoutRecommandationComponent', () => {
  let component: AjoutRecommandationComponent;
  let fixture: ComponentFixture<AjoutRecommandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRecommandationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
