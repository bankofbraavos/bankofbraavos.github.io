import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { 
  }

  getCustomers(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this._url);
  }

}
