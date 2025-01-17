import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceContent6Component } from './inheritance-content-6.component';

describe('InheritanceContent6Component', () => {
  let component: InheritanceContent6Component;
  let fixture: ComponentFixture<InheritanceContent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritanceContent6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceContent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
