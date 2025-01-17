import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismContent3Component } from './polymorphism-content-3.component';

describe('PolymorphismContent3Component', () => {
  let component: PolymorphismContent3Component;
  let fixture: ComponentFixture<PolymorphismContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismContent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
