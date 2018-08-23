import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
})
export class DebounceTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    // debounceTime 可以限制 obs 高频的输出 
    // 例如 : 有个 obs 输出频率很高，比如用户在 input 的时候, 连续打字 
    // 但是我们只关心用户停下来的时候他到底输入了什么 
    // 这时我们就可以使用 debounceTime 来过滤掉无用的值 
    let userInput = new Subject();
    userInput.pipe(debounceTime(1000)).subscribe(observer);
    // userInput.pipe(debounce(() => timer(1000))).subscribe(observer); // 等价
    setTimeout(() => { userInput.next() }, 100);
    setTimeout(() => { userInput.next() }, 200);
    setTimeout(() => { userInput.next() }, 300);
    setTimeout(() => { userInput.next('final'); }, 400);
    // 头 3 个 setTimeout 都不会触发 observer
    // 一直到第 4 个输入后停止输入, 1000ms 后 observer 被触发, 获取到值 final
    // note : 如果在 400ms 时, 调用 userInput.complete() 那么会马上执行 observer, 因为 complete 之后就不可能有新的值了，拿 debounce 就无需等足 1000 ms 了咯.




  }

}
