import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceContent1Component } from './inheritance-content-1.component';

describe('InheritanceContent1Component', () => {
  let component: InheritanceContent1Component;
  let fixture: ComponentFixture<InheritanceContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritanceContent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
