import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationContent1Component } from './encapsulation-content-1.component';

describe('EncapsulationContent1Component', () => {
  let component: EncapsulationContent1Component;
  let fixture: ComponentFixture<EncapsulationContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationContent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
