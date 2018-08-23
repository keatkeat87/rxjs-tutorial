import { observer } from './../log';
import { Component, OnInit } from '@angular/core';
import { interval, combineLatest, BehaviorSubject } from 'rxjs';
import { take, mapTo, map, combineLatest as combineLatestOperator } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html'
})
export class CombineLatestComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 把多个 obs combine 起来, 任何一个叫, 都会触发并且获取到所有 obs 的当前最新值 
    // note : 整个过程有一个大前提，就是每一个 obs 都必须有值, 如果其中一个一直没有值，那么不管其它的叫多少次也没有用哦. 
    // 通常我们会给初始值就可以了

     let o1 = interval(1000).pipe(mapTo('a'),take(1));
     let o2 = interval(1000).pipe(map(v => v + 'b'),take(2));
     let o3 = interval(1000).pipe(mapTo('c'),take(1));

     // 2 个写法是一样的
     o1.pipe(combineLatestOperator(o2,o3)).subscribe(observer);
     combineLatest(o1,o2,o3, 
      (v1,v2,v3) => [v1,v2,v3] // 可以传入一个处理 combine 值的方法, 不然就会获取到 array 
    ).subscribe(observer);


    // ----------------------------------分割线-------------------------------------------

     let s1 = new BehaviorSubject('1');
     let s2 = new BehaviorSubject('2');
     let s3 = new BehaviorSubject('3');
     
     combineLatest(s1,s2,s3).subscribe(observer); // 有初始值，立马就触发第一次了
     setTimeout(() => {
       s2.next('22');
     }, 1000);
 




  }

}
