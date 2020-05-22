import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['fullname', 'email', 'phoneNumber', 'country', 'registeredDate', 'balance', 'role', 'converttoadmin'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  errorList: string[];
  invalid = null;
  constructor(private usersService: UsersService) {
 
  }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(data => {
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

    
  UpdateTable() {
    this.usersService.getAllUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  convertUserToAdmin(userid) {
    if(confirm("Are you Sure?")) {
      this.usersService.convertUserToAdmin(userid).subscribe(data => {
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

