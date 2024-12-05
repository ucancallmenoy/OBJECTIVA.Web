import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson4OverviewComponent } from './lesson4-overview.component';

describe('Lesson4OverviewComponent', () => {
  let component: Lesson4OverviewComponent;
  let fixture: ComponentFixture<Lesson4OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson4OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson4OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
