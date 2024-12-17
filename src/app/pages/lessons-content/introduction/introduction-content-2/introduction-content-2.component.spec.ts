import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContent2Component } from './introduction-content-2.component';

describe('IntroductionContent2Component', () => {
  let component: IntroductionContent2Component;
  let fixture: ComponentFixture<IntroductionContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
