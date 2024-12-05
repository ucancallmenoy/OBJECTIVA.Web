import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3OverviewComponent } from './lesson3-overview.component';

describe('Lesson3OverviewComponent', () => {
  let component: Lesson3OverviewComponent;
  let fixture: ComponentFixture<Lesson3OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson3OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson3OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
