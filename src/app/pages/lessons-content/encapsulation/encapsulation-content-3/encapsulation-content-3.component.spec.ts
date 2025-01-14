import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationContent3Component } from './encapsulation-content-3.component';

describe('EncapsulationContent3Component', () => {
  let component: EncapsulationContent3Component;
  let fixture: ComponentFixture<EncapsulationContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationContent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
