import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecommandationComponent } from './liste-recommandation.component';

describe('ListeRecommandationComponent', () => {
  let component: ListeRecommandationComponent;
  let fixture: ComponentFixture<ListeRecommandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRecommandationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
