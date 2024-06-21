import { Injectable } from '@angular/core';
import { environment } from '../Enviroment/enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  isLogged = new BehaviorSubject(false);
  loggedUser = new BehaviorSubject({email:''});
  logUser(loggedUser: {
    Identifier: string;
    Password: string;
  }) {
    return this.http.post<{
      Username: string;
      Email: string;
      Id:number
    }>(`${environment.baseUrl}/api/Account/login`, loggedUser);
  }
  register(addedUser: { Username: string; Email: string; Password: string }) {
    return this.http.post<{ identifier: string; password: string }>(
      `${environment.baseUrl}/api/Account/register`,
      addedUser
    );
  }
  CheckUserIsLoggedBefore(): Boolean {
    if (localStorage.getItem('CleanLoggedUser') != null) {
      this.loggedUser.next(
        JSON.parse(localStorage.getItem('CleanLoggedUser')!)
      );
      this.isLogged.next(true);
      return true;
    } else {
      return false;
    }
  }
  handleLogOut() {
    this.isLogged.next(false);
    this.loggedUser.next({email:''});
    localStorage.removeItem('CleanLoggedUser');
  }
  editPassword(oldAndNewPassword : {token:string,newPassword:string}) {
    return this.http.post<{message:string}>(`${environment.baseUrl}/api/Account/reset-password`,oldAndNewPassword)
  }
  requestToken(email:string) {
    return this.http.post<{token:string}>(`http://localhost:12446/api/Account/request-reset-password`,{email:email})
  }
}
