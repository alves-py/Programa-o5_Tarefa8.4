import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { increment, decrement, reset, setCount } from './counter.actions';

@Injectable()
export class CounterEffects {
  logActions$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement, reset, setCount),
        tap((action) => console.log('Action dispatched:', action))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
