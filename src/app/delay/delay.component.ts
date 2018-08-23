import { Component, OnInit } from '@angular/core';
import { interval, empty, timer, Subject } from 'rxjs';
import { delay, delayWhen } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html'
})
export class DelayComponent implements OnInit {

  constructor() { }

  click = new Subject();
  
  ngOnInit() {

    // 每次 click 都会 delay 3 秒后才触发
    this.click.pipe(delay(3000)).subscribe(observer);

    
   
  }



}
