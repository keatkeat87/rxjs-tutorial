import { Component, OnInit } from '@angular/core';
import { Subject, interval, timer } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-buffer-toggle',
  templateUrl: './buffer-toggle.component.html'
})
export class BufferToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let start = new Subject();
    interval(1000).pipe(bufferToggle(start, v => {
      // v = start.value 
      return timer(2000); // 返回另一个 obs 决定何时释放 buffer       
    })).subscribe(observer);
    
    start.next('start loh');  
  }

}
