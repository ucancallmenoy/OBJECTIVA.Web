import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2OverviewComponent } from './lesson2-overview.component';

describe('Lesson2OverviewComponent', () => {
  let component: Lesson2OverviewComponent;
  let fixture: ComponentFixture<Lesson2OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson2OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson2OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
