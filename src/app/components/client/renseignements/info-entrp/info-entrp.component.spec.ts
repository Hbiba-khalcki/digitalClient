import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEntrpComponent } from './info-entrp.component';

describe('InfoEntrpComponent', () => {
  let component: InfoEntrpComponent;
  let fixture: ComponentFixture<InfoEntrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEntrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEntrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
