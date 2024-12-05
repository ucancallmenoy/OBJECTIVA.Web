import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1OverviewComponent } from './lesson1-overview.component';

describe('Lesson1OverviewComponent', () => {
  let component: Lesson1OverviewComponent;
  let fixture: ComponentFixture<Lesson1OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson1OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson1OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
