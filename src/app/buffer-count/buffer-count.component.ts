import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferCount } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html'
})
export class BufferCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 存满 3 次值，才一次释放
    interval(1000).pipe(bufferCount(3)).subscribe(observer);
  }




}
