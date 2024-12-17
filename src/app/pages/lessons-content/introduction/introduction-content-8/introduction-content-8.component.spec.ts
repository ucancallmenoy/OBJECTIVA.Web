import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContent8Component } from './introduction-content-8.component';

describe('IntroductionContent8Component', () => {
  let component: IntroductionContent8Component;
  let fixture: ComponentFixture<IntroductionContent8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionContent8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionContent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
