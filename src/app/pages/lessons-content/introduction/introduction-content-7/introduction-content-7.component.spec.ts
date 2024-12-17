import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContent7Component } from './introduction-content-7.component';

describe('IntroductionContent7Component', () => {
  let component: IntroductionContent7Component;
  let fixture: ComponentFixture<IntroductionContent7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionContent7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionContent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
