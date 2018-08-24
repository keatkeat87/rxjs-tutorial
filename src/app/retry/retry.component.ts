import { interval, of, zip, Subject, BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { observer } from '../log';
import { map, tap, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
})
export class RetryComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
    // retry 就是 遇到 error 时 re-subscribe 的意思 
    // 注意, 我们要确保 re-subscribe 能启动从新执行, 我们知道 subscribe 其实是调用方法, 理因会从新执行
    // 但是如果起点是一个 Subject, 那么你 re-subscribe 是无法从新执行的哦

    let source = interval(1000).pipe(take(1));
    source.pipe(
      tap(v => console.log('tap',v)),
      map((v : any) => v.substring(1)),
      retry(3),
    ).subscribe(observer);


    // 下面这个是不对了
    // let s1 = new Subject();
    // s1.pipe(
    //   tap(v => console.log('tap',v)),
    //   map((v : any) => v.substring(1)),
    //   retry(3),
    // ).subscribe(observer);
    // s1.next(0);
   


 
  }

}
