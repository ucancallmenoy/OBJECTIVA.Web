import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson8OverviewComponent } from './lesson8-overview.component';

describe('Lesson8OverviewComponent', () => {
  let component: Lesson8OverviewComponent;
  let fixture: ComponentFixture<Lesson8OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson8OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson8OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
