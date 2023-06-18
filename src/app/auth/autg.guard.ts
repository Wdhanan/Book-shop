import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutgGuard implements CanActivate {
  constructor( private authservice:AuthService){// to know if the user is logged in or not

  }
  canActivate(){
    


    return this.authservice.getLoading();// can not click the MyCart button if he is not  Authenticated.
  }
  
}
