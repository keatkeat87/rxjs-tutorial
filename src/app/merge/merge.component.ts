import { Component, OnInit } from '@angular/core';
import { merge, interval } from 'rxjs';
import { observer } from '../log';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html'
})
export class MergeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let o1 = interval(1000).pipe(map(v => v + 'a'), take(5)); 
    let o2 = interval(2000).pipe(map(v => v + 'b'), take(5));
    let o3 = interval(3000).pipe(map(v => v + 'c'), take(5));

    // 和 concat 的区别是 merge 一开始就会立马 subscribe 所有的 obs
    merge(o1,o2,o3).subscribe(observer);
  }

}
