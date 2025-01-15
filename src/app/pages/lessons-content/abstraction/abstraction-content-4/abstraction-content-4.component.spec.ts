import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractionContent4Component } from './abstraction-content-4.component';

describe('AbstractionContent4Component', () => {
  let component: AbstractionContent4Component;
  let fixture: ComponentFixture<AbstractionContent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractionContent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractionContent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
