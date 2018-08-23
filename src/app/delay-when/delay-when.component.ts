import { Component, OnInit } from '@angular/core';
import { timer, Subject } from 'rxjs';
import { delayWhen, delay } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-delay-when',
  templateUrl: './delay-when.component.html'
})
export class DelayWhenComponent implements OnInit {

  constructor() { }

  click = new Subject();
 
  ngOnInit() {
    
    // delay when 和 delay 差不多
    // 区别是它可以动态决定 delay 多久
    // 有点像 buffer and bufferWhen 的区别

    this.click.pipe(delayWhen(_v => timer(2000))).subscribe(observer);
    this.click.pipe(delay(2000)).subscribe(observer); // 和上面是等价的


  }

}
