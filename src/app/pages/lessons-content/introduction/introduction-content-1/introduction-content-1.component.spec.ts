import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContent1Component } from './introduction-content-1.component';

describe('IntroductionContent1Component', () => {
  let component: IntroductionContent1Component;
  let fixture: ComponentFixture<IntroductionContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionContent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
