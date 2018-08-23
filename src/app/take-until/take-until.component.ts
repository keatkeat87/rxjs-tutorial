import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html'
})
export class TakeUntilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // timer
    console.time();
    let o = timer(3000);
    o.subscribe(_ => console.timeEnd());

    // take until 
    // 和 take 一样，只不过 take 是通过数量来决定什么时候停，而 take until 则是等到参数 obs 叫的时候停. 
    interval(1000).pipe(takeUntil(o)).subscribe(observer);
 
  }

}
