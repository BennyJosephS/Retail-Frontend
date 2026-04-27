import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myorderes } from './myorderes';

describe('Myorderes', () => {
  let component: Myorderes;
  let fixture: ComponentFixture<Myorderes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myorderes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myorderes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
