import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationContent4Component } from './encapsulation-content-4.component';

describe('EncapsulationContent4Component', () => {
  let component: EncapsulationContent4Component;
  let fixture: ComponentFixture<EncapsulationContent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationContent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationContent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
