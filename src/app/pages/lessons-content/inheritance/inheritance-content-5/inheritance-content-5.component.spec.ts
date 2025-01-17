import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceContent5Component } from './inheritance-content-5.component';

describe('InheritanceContent5Component', () => {
  let component: InheritanceContent5Component;
  let fixture: ComponentFixture<InheritanceContent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritanceContent5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceContent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
