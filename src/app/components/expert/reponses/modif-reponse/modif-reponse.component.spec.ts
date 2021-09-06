import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifReponseComponent } from './modif-reponse.component';

describe('ModifReponseComponent', () => {
  let component: ModifReponseComponent;
  let fixture: ComponentFixture<ModifReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
