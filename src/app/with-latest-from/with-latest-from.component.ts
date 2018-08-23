import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { observer } from '../log';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html'
})
export class WithLatestFromComponent implements OnInit {

  constructor() { }

  ngOnInit() {

     // withLatestFrom 有主从关系, 必须有一个 main obs
     // main obs.withLatestFrom(other obs)
     // 所以 withLatestFrom 没有直接调用的方法, withLatestFrom(s1,s2) 这样是不可以跑的, 这和 combineLatest, zip 不同哦 
     // 它很像 combineLatest 区别是, combineLatest 任何一个叫都会触发, 而 withLatestFrom 只有 main obs 叫 才会触发 
     // 然后也是一样获取所有 obs 的最新值 

     let s1 = new BehaviorSubject('s1 0');
     let s2 = new BehaviorSubject('s2 0');
     s1.pipe(withLatestFrom(s2)).subscribe(observer); 
     s2.next('s2 1'); // 不会叫
     setTimeout(() => {
       s1.next('s1 1');       
     }, 5000);

     

    
  }

}
