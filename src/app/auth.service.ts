
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements CanActivate {
    
    constructor(private http: HttpClient,private router: Router) { 
    
    }

    loginOwn(userData) {
        return this.http.post(environment.Login_API + 'login', {
            username: userData.username,
            password: userData.password,
        })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('token')) {
        return true;
      }
      else {
        this.router.navigate(['', 'login'])
        return false;
      }
    }

    getAuthHeader() {
        let headers = new HttpHeaders();
        headers.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
        headers.set('Content-Type', 'application/json');
        return headers;
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}