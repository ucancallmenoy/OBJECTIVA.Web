import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractionContent2Component } from './abstraction-content-2.component';

describe('AbstractionContent2Component', () => {
  let component: AbstractionContent2Component;
  let fixture: ComponentFixture<AbstractionContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractionContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractionContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
