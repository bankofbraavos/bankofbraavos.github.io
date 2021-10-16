import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public categories: string[] = [];
  public sendCopy: boolean = false;
  public iscontacted: boolean = false;
  public isFormInValid: boolean = false;

  constructor() { 
    this.categories= ['Feedback', 'Report a bug', 'Feature Request', 'Complaint'];
  }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {
    if (signInForm.touched && signInForm.valid) {
      this.isFormInValid = false;
      this.iscontacted = true;
    }
    else if (signInForm.touched && signInForm.invalid) {
      this.isFormInValid = true;
    }
  }

  resetForm(signInForm: NgForm) {
    this.iscontacted = false;
    this.isFormInValid = false;
    signInForm.reset();
  }

}
