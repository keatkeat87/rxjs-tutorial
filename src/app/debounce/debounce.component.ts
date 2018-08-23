import { observer } from './../log';
import { Component, OnInit } from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
})
export class DebounceComponent implements OnInit {

  constructor() { }

  click = new Subject();

  ngOnInit() {
     
    // debounce 和 debounceTime 一样，区别是我们可以控制要 debounce 多久
 
    let userInput = new Subject();
    userInput.pipe(debounce(() => timer(1000))).subscribe(observer);
    // userInput.pipe(debounceTime(1000)).subscribe(v => observer);  // 等价
    setTimeout(() => { userInput.next() }, 100);
    setTimeout(() => { userInput.next() }, 200);
    setTimeout(() => { userInput.next() }, 300);
    setTimeout(() => { userInput.next('final'); }, 400);
 


  }

}
