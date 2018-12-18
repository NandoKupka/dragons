import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userData: {
      username: String,
      password: String
  }

  constructor (private router: Router, private authService: AuthService) {
      this.userData = {
          username: 'admin',
          password: 'admin'
      }
  }

  ngOnInit() {
  }

  setLocalStorageToken(token: string) {
    localStorage.setItem('token', token);
  }

  loginOwn() {
      // console.log(this.userData)
      this.authService.loginOwn(this.userData)
          .subscribe((data) => {                
              this.router.navigate(['dragons'])
              this.setLocalStorageToken(data['token']);
          }, (error) => {
              alert('Erro no login' + error)
              console.log('login error: ' + error);
          });
  }

}
