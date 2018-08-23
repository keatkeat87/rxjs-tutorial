import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html'
})
export class ThrottleTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 和 debounceTime 很像，区别是 debounceTime 是在一轮频密触发后，等待一段时间然后输出最新的值 
    // ThrottleTime 则是一开始就马上输出一个值，然后忽视一段时间内的频密触发. 
        
    let userInput = new Subject();
    userInput.pipe(throttleTime(1000)).subscribe(observer);
    setTimeout(() => { userInput.next('go') }, 100);
    setTimeout(() => { userInput.next() }, 200);
    setTimeout(() => { userInput.next() }, 300);
    setTimeout(() => { userInput.next('无视'); }, 400);
    setTimeout(() => { userInput.next('有了'); }, 1200);

  }

}
