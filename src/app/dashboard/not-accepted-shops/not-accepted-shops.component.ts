import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-not-accepted-shops',
  templateUrl: './not-accepted-shops.component.html',
  styleUrls: ['./not-accepted-shops.component.css']
})
export class NotAcceptedShopsComponent implements OnInit {

  displayedColumns: string[] = ['ShopName',  'ShopPhone', 'Accept'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  errorList: string[];
  invalid = null;

  constructor(private shopService: ShopsService) {
 
  }

  ngOnInit() {
    this.UpdateTable();
  }
  
  UpdateTable() {
    this.shopService.GetNotAccesptedShops().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  accept(shopid) {

    if(confirm("Are you Sure?")) {
      this.shopService.AcceptShop(shopid).subscribe(data => {
        alert("Done")
        this.errorList = []
        this.invalid = false;
        this.UpdateTable()
      }, error => {
        this.invalid = true;
        var myErrors = error.error.value;
        this.errorList = [];
        for(var i = 0; i < myErrors.length; i++) {
          this.errorList.push(myErrors[i]);
        }
      })
    }

   
  }

}
