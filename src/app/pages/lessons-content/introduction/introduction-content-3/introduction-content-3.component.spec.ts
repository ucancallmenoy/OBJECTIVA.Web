import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContent3Component } from './introduction-content-3.component';

describe('IntroductionContent3Component', () => {
  let component: IntroductionContent3Component;
  let fixture: ComponentFixture<IntroductionContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionContent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
