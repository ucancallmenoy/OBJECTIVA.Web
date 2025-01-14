import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationContent5Component } from './encapsulation-content-5.component';

describe('EncapsulationContent5Component', () => {
  let component: EncapsulationContent5Component;
  let fixture: ComponentFixture<EncapsulationContent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationContent5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationContent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
