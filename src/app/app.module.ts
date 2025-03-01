import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './store/counter.reducer';
import { CounterEffects } from './store/counter.effects';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
