import { interval, Subject, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { buffer, bufferCount, bufferTime, bufferToggle } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html'
})
export class BufferComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // buffer 顾名思义就是一直存着不要触发 
    // 通过另一个 obs 的触发, 然后才一次释放所有 buffer 值 
    // 例如 : obs 每一秒都输出值, 但是由于被 buffer 了所以一直都不会触发 subscribe 
    // 一直等到 click obs 触发才会一次性释放之前存的值 
     
    let click = new Subject();
    interval(1000).pipe(buffer(click)).subscribe(observer);
    
    setInterval(() => {
      click.next(); // 每 3 秒释放一次
    }, 3000);

  
  }

}
