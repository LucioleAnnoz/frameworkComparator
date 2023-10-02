import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created with a counter to 0', () => {
    expect(component.counter).toBe(0);
  })

  describe('plusOne', () => {
    it('should be counter to 1', () => {
      component.addOne();
      expect(component.counter).toBe(1);
    })
  });

  describe('minusOne', () => {
    it('should be counter to -1', () => {
      component.minusOne();
      expect(component.counter).toBe(-1);
    })
  });
});
