import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.scss']
})
export class WrapComponent implements OnInit {

  @Input() parentTitle  
  constructor() { 
  }

  ngOnInit() {
  }

}
