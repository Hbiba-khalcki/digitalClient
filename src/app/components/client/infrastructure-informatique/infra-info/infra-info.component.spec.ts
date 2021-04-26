import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraInfoComponent } from './infra-info.component';

describe('InfraInfoComponent', () => {
  let component: InfraInfoComponent;
  let fixture: ComponentFixture<InfraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
