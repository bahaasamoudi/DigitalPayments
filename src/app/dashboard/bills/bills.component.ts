import { Component, OnInit, ViewChild } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import { ReportsService } from 'src/app/services/reports.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  displayedColumns: string[] = ['ShopName',  'ShopPhone', 'date', 'Receivables', 'GotIt'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  errorList: string[];
  invalid = null;

  constructor(private reportsService: ReportsService, private transactionsService: TransactionsService) {
 
  }

  ngOnInit() {
    this.UpdateTable();
  }
  
  UpdateTable() {
    this.reportsService.getBillsForShops().subscribe(data => {
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

  gotBill(billid) {

    if(confirm("Are you Sure?")) {
      this.transactionsService.GetBill(billid).subscribe(data => {
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

