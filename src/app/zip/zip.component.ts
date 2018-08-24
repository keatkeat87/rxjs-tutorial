import { BehaviorSubject, zip, of, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { observer } from '../log';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html'
})
export class ZipComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    // zip 和 combineLatest 有点像， 都是在触发是会获取多个 obs 的值. 
    // 不同的地方是, combineLatest 每一次叫都是获取大家最新值, 而 zip 叫则会获取当前的 index 然后看其它人同一个 index 
    // 如果所有人都拥有这个 index 值则触发返回大家所有这个 index 值, 否则就不触发了. 
    // 假设 [o1,o2,o3] 分别都叫了很多次, 
    // o1 叫了 10 次, o2 叫了 12 次, o3 叫了 16 次
   
    // 那现在最小的 o1 叫了 11 次， 这时 zip 获取到的值是 o1 第11次， o2 11次, o3 11次的值
    // 如果是 o2 叫了第 13 次, 这时 zip 无法获取到 o1 第13次的值，所以就不触发了. 
    
    let s1 = new BehaviorSubject('s1: 0');
    let s2 = new BehaviorSubject('s2: 0');
    let s3 = new BehaviorSubject('s3: 0');

    zip(s1,s2,s3).subscribe(observer);
    s2.next('s2: 1');
    s2.next('s2: 2');
    s1.next('s1: 1');
    s3.next('s3: 1');


    // 常用来写 demo
    let o1 = of('a', 'b', 'b', 'd');
    zip(interval(1000), o1, (v1, v2) => v2).subscribe(observer);
 

  }

}
