import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0

  addOne() {
    this.counter += 1;
  }

  minusOne() {
    this.counter -= 1;
  }
}
