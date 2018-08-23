import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { take, map, mergeAll } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html'
})
export class MergeAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {

     // mergeAll 和 concatAll 很像 
     // 区别在于最后环节使用了 merge 而不是 concat
     // mergeAll 可以输入一个参数 
     // 决定同时允许的并发数目 
     // 如果放 1 的时候效果就和 concatAll 一模一样
     // process :
     // interval 叫 -> [o1] -> 如果并发是 2 -> o1.subscribe 
     // -> interval 叫 -> [o1,o2] -> 如果并发是 2 -> o2.subscribe 
     // -> interval 叫 -> [o1,o2,o3] -> 如果并发是 2 -> no subscribe first, wait for o1 or o2 complete then start subscribe o3
          
     console.time();
     interval(300).pipe(
       take(10),
       map(v => timer(600)),
       mergeAll()
     ).subscribe(observer);

  }

}
