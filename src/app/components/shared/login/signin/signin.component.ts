import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      if (this.tokenStorage.getRole()) {
        switch (this.tokenStorage.getRole()) {
          case 'ROLE_ADMIN':
            this.router.navigate(['list-exp']);
            break;
          case 'ROLE_EXPERT':
            this.router.navigate(['question']);
            break;
          case 'ROLE_USER':
            this.router.navigate(['typeorganisation']);
            break;
        }
      }
    }
  }

  onSubmit(): void {
    const {username, password} = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        if (this.tokenStorage.getToken()) {
          if (this.tokenStorage.getRole()) {
            switch (this.tokenStorage.getRole()) {
              case 'ROLE_ADMIN':
                // route par default admin
                this.router.navigate(['list-exp']);
                break;
              case 'ROLE_EXPERT':
                // route par default expert
                this.router.navigate(['axe']);
                break;
              case 'ROLE_USER':
                // route par default client
                this.router.navigate(['typeorganisation']);
                break;
            }
          }
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  reloadPage(): void {
    window.location.reload();
  }
}
