import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.css']
})
export class WrapComponent implements OnInit {

  @Input() parentTitle  
  constructor() { 
  }

  ngOnInit() {
  }

}
