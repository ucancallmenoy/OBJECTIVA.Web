import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismContent2Component } from './polymorphism-content-2.component';

describe('PolymorphismContent2Component', () => {
  let component: PolymorphismContent2Component;
  let fixture: ComponentFixture<PolymorphismContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
