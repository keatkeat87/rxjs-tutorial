import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { observer } from '../log';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html'
})
export class ScanComponent implements OnInit {

  constructor() { }

  ngOnInit() {

     // 和 js 的 reduce 同一个概念, 就是每一次叫的时候可以获取当前值 + 之前返回的值 

     interval(1000).pipe(
       scan((acc, value) => {
         return acc + value;
       })
     ).subscribe(observer);
  }

}
