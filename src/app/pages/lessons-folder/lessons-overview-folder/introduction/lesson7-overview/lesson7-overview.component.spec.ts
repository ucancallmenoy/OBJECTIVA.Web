import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson7OverviewComponent } from './lesson7-overview.component';

describe('Lesson7OverviewComponent', () => {
  let component: Lesson7OverviewComponent;
  let fixture: ComponentFixture<Lesson7OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson7OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson7OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
