import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CustomerTable } from 'src/app/models/customertable.model';
import { ICustomer, ICustomerTable } from 'src/app/models/customer.model';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers: ICustomer[] = [];
  public customerTableData: ICustomerTable[] = [];
  public displayedColumns: string[] = [];
  public dataSource: any;

  public selectedColumn: string = '';
  public selectedCellValues: string[] = [];
  public filterByValue: string = '';
  public filteredCustomers: ICustomer[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customerService: CustomerService, private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: ICustomer[]) => {
      this.customers = data;
      this.customerTableData = CustomerTable.getCustomerTableData(this.customers);
      this.displayedColumns = ['id', 'name', 'email'];
      this.dataSource = new MatTableDataSource(this.customerTableData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  getSelectedColumnValues(event: any) {
    this.selectedCellValues.splice(0, this.selectedCellValues.length);
    this.customers.forEach((customer: any) => {
      this.selectedCellValues.push(customer[this.selectedColumn]);
    })
  }

  public applyFilter() {
    this.dataSource = new MatTableDataSource(CustomerTable.getFilteredCustomerTableData(this.customerTableData, this.selectedColumn, this.filterByValue));
  }

  public applyReset() {
    this.dataSource = new MatTableDataSource(CustomerTable.getCustomerTableData(this.customers));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.selectedColumn = '';
    this.filterByValue = '';
  }

}
