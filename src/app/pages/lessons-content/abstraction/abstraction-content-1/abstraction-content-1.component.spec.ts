import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractionContent1Component } from './abstraction-content-1.component';

describe('AbstractionContent1Component', () => {
  let component: AbstractionContent1Component;
  let fixture: ComponentFixture<AbstractionContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractionContent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractionContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
