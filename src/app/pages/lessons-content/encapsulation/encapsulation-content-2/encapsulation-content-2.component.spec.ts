import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationContent2Component } from './encapsulation-content-2.component';

describe('EncapsulationContent2Component', () => {
  let component: EncapsulationContent2Component;
  let fixture: ComponentFixture<EncapsulationContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
