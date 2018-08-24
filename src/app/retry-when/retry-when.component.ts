import { Component, OnInit } from '@angular/core';
import { interval, of, throwError, Subject } from 'rxjs';
import { take, tap, map, retry, catchError, retryWhen, delay, concat, scan } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
})
export class RetryWhenComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // retry when 很牛的 
    // 通过返回一个 obs, retry 可以无限循环
    // 每一次 retry(re-subscribe) retryWhen 的 obs 都会流动, 获取每一次的 error 值, 当热成功了就不会触发了, 或则我们自己暂停这个 obs
    // 比如 take(3) 或则 throw 都可以停止这个 obs 
    // take(3) 虽然停止了，但是是以 complete 的方式停止，这样是不对的. 
    // 通常是用 scan 来计数, 3次还没有成功那么直接 throw 停止 retry 
        
    let source = interval(1000).pipe(take(1));
    source.pipe(
      tap(v => console.log('tap', v)),
      map((v: any) => v.substring(1)),
      retryWhen(error => {        
        return error.pipe(map(v => {
          throw 'dada';
        }), delay(1000), take(3));
      }),
    ).subscribe(observer);


    // scan 计数 throw error 
    source.pipe(
      tap(v => console.log('tap', v)),
      map((v: any) => v.substring(1)),
      retryWhen(error => {
        return error.pipe(
          scan((count, error) => {
            if(count == 3) throw error;
            return count + 1;
          }, 0),
          delay(1000)
        );
      }),
    ).subscribe(observer);

  }

}
