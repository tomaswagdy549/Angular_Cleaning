import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  haveAccount: boolean = true;
  registerData: {
    Username: string;
    Email: string;
    Password: string;
  } = { Username: '', Email: '', Password: '' };
  loginData: {
    Password: string;
    Email: string;
  } = { Password: '', Email: '' };
  login() {
    this.authService
      .logUser({
        Identifier: this.loginData.Email,
        Password: this.loginData.Password,
      })
      .subscribe({
        next: (response) => {
          this.handleLogin(response);
        },
        error: (error) => {
          console.log(error.error)
          this.errors = error.error;
        },
      });
  }
  register() {
    this.authService
      .register({
        Username: this.registerData.Username,
        Email: this.registerData.Email,
        Password: this.registerData.Password,
      })
      .subscribe({
        next: (response) => {
          this.authService
            .logUser({
              Identifier: response.identifier,
              Password: response.password,
            })
            .subscribe({
              next: (response) => {
                this.handleLogin(response);
              },
              error: (error) => {
                this.errors = error.error.errors;
              },
            });
        },
        error: (error) => {
          this.errors = error.error.errors;
        },
      });
  }
  handleLogin(response: any) {
    this.authService.isLogged.next(true);
    this.authService.loggedUser.next(response);
    localStorage.setItem('CleanLoggedUser', JSON.stringify(response));
    this.router.navigateByUrl('/Home');
  }
  switchFromSignupToLogin() {
    this.haveAccount = !this.haveAccount;
  }
  errors = {};
  objectvalues = Object.values;
}
