import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractionContent3Component } from './abstraction-content-3.component';

describe('AbstractionContent3Component', () => {
  let component: AbstractionContent3Component;
  let fixture: ComponentFixture<AbstractionContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractionContent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractionContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
