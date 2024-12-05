import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson5OverviewComponent } from './lesson5-overview.component';

describe('Lesson5OverviewComponent', () => {
  let component: Lesson5OverviewComponent;
  let fixture: ComponentFixture<Lesson5OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson5OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson5OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
