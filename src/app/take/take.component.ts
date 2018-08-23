import { Component, OnInit } from '@angular/core';
import { of,interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html'
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // take 用于方便 complete + unsubscribe, 比如叫三次后就 completed & unsubscribe     
    interval(1000).pipe(take(3)).subscribe(observer); 
      

  }

}
