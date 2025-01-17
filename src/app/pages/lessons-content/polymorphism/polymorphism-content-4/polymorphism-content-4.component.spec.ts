import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismContent4Component } from './polymorphism-content-4.component';

describe('PolymorphismContent4Component', () => {
  let component: PolymorphismContent4Component;
  let fixture: ComponentFixture<PolymorphismContent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismContent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismContent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
