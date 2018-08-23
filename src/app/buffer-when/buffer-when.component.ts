import { Component, OnInit } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { bufferWhen, buffer } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html'
})
export class BufferWhenComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 和 buffer 几乎是一样的, 比较好的地方是, buffer 开始时就 set 试了 release obs 
    // 而 bufferWhen 则可以后来才 return release obs 
    // 比起来还是 buffer toggle 最灵活

    let click = new Subject();
    interval(1000).pipe(bufferWhen(() => click)).subscribe(observer);  // 和下面这个 buffer 等价
    interval(1000).pipe(buffer(click)).subscribe(observer); 
    
    setInterval(() => {
      click.next(); // 每 3 秒释放一次
    }, 3000);

  }

}
