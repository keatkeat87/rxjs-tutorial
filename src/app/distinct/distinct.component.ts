import { Component, OnInit } from '@angular/core';
import { Subject, zip, interval, of } from 'rxjs';
import { distinct } from 'rxjs/operators';
import { observer } from '../log';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html'
})
export class DistinctComponent implements OnInit {

  constructor() { }

  ngOnInit() {

       // 区别不大，只是说它会一直维护一个 Set, 把之前的 value 
       let o1 = of('a', 'b', 'b', 'd','a','g');   
       let release = new Subject(); // 用于清理 Set cache 
       zip(interval(1000), o1, (v1, v2) => v2).pipe(
         distinct(key => key, release) // 自选 value 作为 Set 的 key 
       ).subscribe(observer);
  }

}
