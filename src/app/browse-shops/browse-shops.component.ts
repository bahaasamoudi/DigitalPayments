import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShopsService } from '../services/shops.service';

@Component({
  selector: 'app-browse-shops',
  templateUrl: './browse-shops.component.html',
  styleUrls: ['./browse-shops.component.scss']
})
export class BrowseShopsComponent implements OnInit {
  shops = []
  pageOfItems: Array<any>;
  @ViewChild('searchInput', {static: false}) searchInput : ElementRef
  constructor(private shopService: ShopsService) { }



  ngOnInit() {
    this.shopService.GetAllShops().subscribe(data => {
      this.shops = data
    })
    
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

applyFilter(event: Event) {
  const filterValue = this.searchInput.nativeElement.value;
  const filterToLowerCase = filterValue.trim().toLowerCase();
  this.shopService.GetSearchShops(filterToLowerCase).subscribe(data => {
    this.shops = data
  })


  // if (this.dataSource.paginator) {
  //   this.dataSource.paginator.firstPage();
  // }
}

}
