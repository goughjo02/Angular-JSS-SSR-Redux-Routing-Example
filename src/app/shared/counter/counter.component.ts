import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../../redux/actions';
import { JssService } from '../../core/jss/jss.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class MyCounterComponent {
  color;
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>, private jss: JssService) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
  changeColor() {
    console.log('color');
    this.jss.changeTheme({ h: 87, s: 100, l: 22 });
  }
  selectColor(choice) {
    console.log(choice)
    this.jss.changeTheme(choice);
  }
}
