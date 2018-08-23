import { observer } from './../log';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html'
})
export class StartWithComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    // startWith 就是在一 subscribe 的时候马上就会粗发的值, 简称 default value 
    timer(3000).pipe(startWith(3)).subscribe(observer);


  }

}
