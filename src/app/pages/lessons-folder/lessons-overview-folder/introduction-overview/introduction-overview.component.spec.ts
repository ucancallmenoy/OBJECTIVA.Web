import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionOverviewComponent } from './introduction-overview.component';

describe('IntroductionOverviewComponent', () => {
  let component: IntroductionOverviewComponent;
  let fixture: ComponentFixture<IntroductionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
