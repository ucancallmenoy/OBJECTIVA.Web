import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContent6Component } from './introduction-content-6.component';

describe('IntroductionContent6Component', () => {
  let component: IntroductionContent6Component;
  let fixture: ComponentFixture<IntroductionContent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionContent6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionContent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
