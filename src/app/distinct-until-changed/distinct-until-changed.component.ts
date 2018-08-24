import { Component, OnInit } from '@angular/core';
import { of, interval, zip, Subject } from 'rxjs';
// import { zip } from 'rxjs/operators';
import { observer } from '../log';
import { distinctUntilChanged, distinct } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html'
})
export class DistinctUntilChangedComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 如何和上一个输出的值相同就忽视 
    
    let o1 = of('a', 'b', 'b', 'd','a','g');   
    zip(interval(1000), o1, (v1, v2) => v2).pipe(
      distinctUntilChanged((v1,v2) => v1 === v2) // 自定义 compare 方法 
    ).subscribe(observer); 
    
  }

}
