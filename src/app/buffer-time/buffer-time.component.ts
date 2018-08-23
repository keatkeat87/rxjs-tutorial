import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html'
})
export class BufferTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // obs 一叫就开始计时 buffer, 3 秒后一次过释放所有值, 等下一次叫后又开始下一个计时
    interval(1000).pipe(bufferTime(3000)).subscribe(observer);
  }

}
