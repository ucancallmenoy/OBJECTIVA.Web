import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContent4Component } from './introduction-content-4.component';

describe('IntroductionContent4Component', () => {
  let component: IntroductionContent4Component;
  let fixture: ComponentFixture<IntroductionContent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionContent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionContent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
