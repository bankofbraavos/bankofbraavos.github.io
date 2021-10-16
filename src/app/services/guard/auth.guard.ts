import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(private authService:AuthenticationService, private router:Router){
     
  }
  canActivate():boolean {
      if(this.authService.getIsAuthenticated()){
        return true;
      }
      else{
        this.router.navigate(['']);
        return false;
      }
   
  }
  
}
