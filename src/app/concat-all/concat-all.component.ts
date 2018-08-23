import { observer } from './../log';
import { interval, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { take, map, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html'
})
export class ConcatAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {

     // concatAll 和 concat 有 2 个地方像. 
     // 第一个是它们都有 array 概念 
     // 不同的是 concat 的 array 是在初始化是就输入了，而且是不会动态增加的 concat([o1,o2]) 
     // concatAll 则是搜集其 parent 返回的 obs 组成 array, 随着 parent 不断的输出, array 是一直动态增加的. 
     // 像下面的例子, interval 一直输出, 然后被 map 成了 obs, concatAll 会不断的搜集这些 obs 形成 [o1,o2,o3]
     // 接着就和 concat 一样的方式处理了, subscribe o1 等 o1 complete 接着 subscribe o2 ....
     // 等到 interval complete 以及 所有 [o1,o2] complete 最后 subscribe 也就 complete 了.
     
     console.time();
     interval(300).pipe(
       take(10),
       map(v => timer(600)),
       concatAll()
     ).subscribe(observer);


  }

}
