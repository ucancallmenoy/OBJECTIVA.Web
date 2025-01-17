import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceContent4Component } from './inheritance-content-4.component';

describe('InheritanceContent4Component', () => {
  let component: InheritanceContent4Component;
  let fixture: ComponentFixture<InheritanceContent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritanceContent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceContent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
