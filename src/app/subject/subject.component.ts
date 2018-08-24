import { Subject, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { take, shareReplay, multicast, share } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // subject 和 obs 最大的区别是 subscribe 
    // subject 的 subscribe 其实就是 addEventListener, 典型的观察者模式 
    // subject 内有 array 维护这些订阅者 
    // 相对的 obs 的 subscribe 却没有，obs 的 subscribe 是方法调用 
    // subject 的诞生最要是为了 share 阻止 obs 的 subscribe 每一次都执行     
    
    let source = interval(1000).pipe(take(3));
    // 下面 2 个会调用 2 次 source, 完全独立的执行, 计时从新开始   
    source.subscribe(observer);
    setTimeout(() => {
      source.subscribe(observer);       
    }, 2000);

    // 我们要 share 的话可以使用 subject 
    let s = new Subject();
    s.subscribe(observer);
    setTimeout(() => {
      s.subscribe(observer);       
    }, 2000);
    source.subscribe(s);

    // 上面这种写法比较麻烦，通常我们这样写，等价与上面的 
    // source.pipe(share())
    // source.pipe(shareReplay(1)) // shareReplay 就是搭配上 ShareReplaySubject, 这样一旦 subscribe 立马可以获取最新的值
    
    

    







  }

}
