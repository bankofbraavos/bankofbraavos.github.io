import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress, IindianStates } from 'src/app/models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private _url:string = "../../../assets/data/us.json";
  private _url1:string = "../../../assets/data/india.json";

  constructor(private http:HttpClient) { }

  getStates():Observable<IAddress[]>{
    return this.http.get<IAddress[]>(this._url);
  }

  getIndianStates():Observable<IindianStates[]>{
    return this.http.get<IindianStates[]>(this._url1);
  }
}
