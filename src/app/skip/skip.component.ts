import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { skip, take } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html'
})
export class SkipComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 很简单, 第 4 秒才开始叫, 前 3 秒被 filter 掉了~
    console.time()
    interval(1000).pipe(skip(3),take(1)).subscribe(observer);


  }

}
