import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() {

    function myFunction() {
      var x = document.getElementById("navbar");
      if (x.className === "topnav") {
        x.className += " ftco-nav";
      } else {
        x.className = "topnav";
      }
    }
   }

  ngOnInit() {
  }

}
