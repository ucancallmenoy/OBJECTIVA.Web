import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson6OverviewComponent } from './lesson6-overview.component';

describe('Lesson6OverviewComponent', () => {
  let component: Lesson6OverviewComponent;
  let fixture: ComponentFixture<Lesson6OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson6OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson6OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
