import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public authenticated=false;

  constructor(private authenticationService:AuthenticationService) { 
    this.authenticationService.getUserLoggedIn.subscribe(name => this.authenticated = name as boolean);
  }

  ngOnInit(): void {
  }

  signout(){
    this.authenticationService.logout();
    this.authenticated = this.authenticationService.getIsAuthenticated();
  }

}
