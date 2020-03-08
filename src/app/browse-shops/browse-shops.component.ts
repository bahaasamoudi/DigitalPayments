import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-shops',
  templateUrl: './browse-shops.component.html',
  styleUrls: ['./browse-shops.component.css']
})
export class BrowseShopsComponent implements OnInit {
  title: string = "Browse Shops"
  constructor() { }

  ngOnInit() {
  }

}
