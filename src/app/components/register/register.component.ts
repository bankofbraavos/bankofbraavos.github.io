import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IindianStates } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public cities: string[] = [];
  public states: string[] = [];

  public locationData: IindianStates[] = [];
  public isRegistered: boolean = false;
  public isFormInValid: boolean = false;

  constructor(private addressService: AddressService) {

  }

  ngOnInit(): void {

    this.addressService.getIndianStates().subscribe(data => {
      this.locationData = data;
      this.states = data.map((addr) => {
        return addr.state;
      })
    });

  }

  onChangeState(event: Event) {

    const selectedState = event as unknown as string;

    this.cities = this.locationData.filter(data =>
      data.state == selectedState
    ).map(data1 => data1.name);

  }


  onSubmit(signUpForm: NgForm) {
    if (signUpForm.touched && signUpForm.valid) {
      this.isFormInValid = false;
      this.isRegistered = true;
    }
    else if (signUpForm.touched && signUpForm.invalid) {
      this.isFormInValid = true;
    }

  }

  resetForm(signUpForm: NgForm) {
    this.isRegistered = false;
    this.isFormInValid = false;
    signUpForm.reset();
  }

}
