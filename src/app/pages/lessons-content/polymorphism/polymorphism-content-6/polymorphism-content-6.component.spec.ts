import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismContent6Component } from './polymorphism-content-6.component';

describe('PolymorphismContent6Component', () => {
  let component: PolymorphismContent6Component;
  let fixture: ComponentFixture<PolymorphismContent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismContent6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismContent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
