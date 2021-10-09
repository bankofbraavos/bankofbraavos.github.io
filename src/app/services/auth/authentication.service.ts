import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SignInData } from 'src/app/models/SignInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private readonly mockUser: SignInData = new SignInData('user', 'test');
  isAuthenticated = false;
  public getUserLoggedIn= new Subject();

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['customer']);
      this.getUserLoggedIn.next(true);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getUsername()) && this.checkPassword(signInData.getPassword());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getUsername();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

}
