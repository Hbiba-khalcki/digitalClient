import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifRessourceComponent } from './modif-ressource.component';

describe('ModifRessourceComponent', () => {
  let component: ModifRessourceComponent;
  let fixture: ComponentFixture<ModifRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
