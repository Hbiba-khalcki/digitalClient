import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifRecommandationComponent } from './modif-recommandation.component';

describe('ModifRecommandationComponent', () => {
  let component: ModifRecommandationComponent;
  let fixture: ComponentFixture<ModifRecommandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifRecommandationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifRecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
