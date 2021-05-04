import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEntrpTwoComponent } from './info-entrp-two.component';

describe('InfoEntrpTwoComponent', () => {
  let component: InfoEntrpTwoComponent;
  let fixture: ComponentFixture<InfoEntrpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEntrpTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEntrpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
