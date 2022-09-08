import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumMenorComponent } from './num-menor.component';

describe('NumMenorComponent', () => {
  let component: NumMenorComponent;
  let fixture: ComponentFixture<NumMenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumMenorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
