import { take, map } from 'rxjs/operators';
import { interval, concat } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { observer } from '../log';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html'
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    
    let o1 = interval(1000).pipe(map(v => v + 'a'), take(1)); 
    let o2 = interval(1000).pipe(map(v => v + 'b'), take(1));
    let o3 = interval(1000).pipe(map(v => v + 'c'), take(1));

    // 先 subscribe o1 然后等 o1 complete 就 subscribe o2 以此类推
    // 如果 o1 一直没有 complete 那么 o2 永远不会被 subscribe. 
    concat(o1,o2,o3).subscribe(observer);


  }

}
