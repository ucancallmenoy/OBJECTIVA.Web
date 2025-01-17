import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceContent3Component } from './inheritance-content-3.component';

describe('InheritanceContent3Component', () => {
  let component: InheritanceContent3Component;
  let fixture: ComponentFixture<InheritanceContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritanceContent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
