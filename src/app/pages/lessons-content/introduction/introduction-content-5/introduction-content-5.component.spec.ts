import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContent5Component } from './introduction-content-5.component';

describe('IntroductionContent5Component', () => {
  let component: IntroductionContent5Component;
  let fixture: ComponentFixture<IntroductionContent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionContent5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionContent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
