import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  @Input() age: number = 20; 

  constructor() { }

  ngOnInit() {
  }

}
