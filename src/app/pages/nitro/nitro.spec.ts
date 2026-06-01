import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nitro } from './nitro';

describe('Nitro', () => {
  let component: Nitro;
  let fixture: ComponentFixture<Nitro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nitro],
    }).compileComponents();

    fixture = TestBed.createComponent(Nitro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
