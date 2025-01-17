import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismContent5Component } from './polymorphism-content-5.component';

describe('PolymorphismContent5Component', () => {
  let component: PolymorphismContent5Component;
  let fixture: ComponentFixture<PolymorphismContent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismContent5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismContent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
