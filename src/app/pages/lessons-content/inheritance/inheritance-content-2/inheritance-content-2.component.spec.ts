import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceContent2Component } from './inheritance-content-2.component';

describe('InheritanceContent2Component', () => {
  let component: InheritanceContent2Component;
  let fixture: ComponentFixture<InheritanceContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritanceContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
