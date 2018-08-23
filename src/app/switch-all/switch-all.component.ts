import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { take, map, switchAll } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html'
})
export class SwitchAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    // 和 concatAll, mergeAll 很像，但是不像 concat, merge 并没有一个方法叫 swtich 可以直接用的.
    // switchAll 也是搜集 obs 概念 [o1,o2,o3]
    // 区别是它 subscribe o1 后, o2 一旦进入 array 它立马 unsubscribe o1 跑去 subscribe o2.
    // concatAll 是等 o1 complete 才去 subscribe o2 
    // mergeAll 是立马去 subscribe o2 并且 o1 没有 unsubscribe 
    // switchAll 也是立马去 subscribe o2 但是它也会马上 unsubscribe o1
    
    console.time();
    interval(300).pipe(
      take(10),
      map(v => timer(600)),
      switchAll()
    ).subscribe(observer);


  }

}
