import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
  setCount,
} from '../store/counter.actions';
import { selectCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Contador: {{ count$ | async }}</h1>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <button (click)="reset()">Reset</button>
    <input type="number" [(ngModel)]="customValue" />
    <button (click)="setCustomValue()">Definir Valor</button>
  `,
})
export class CounterComponent {
  count$: Observable<number>;
  customValue: number = 0;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  setCustomValue() {
    this.store.dispatch(setCount({ value: this.customValue }));
  }
}
