import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismContent1Component } from './polymorphism-content-1.component';

describe('PolymorphismContent1Component', () => {
  let component: PolymorphismContent1Component;
  let fixture: ComponentFixture<PolymorphismContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismContent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
