import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UserRegister} from "../../models/User";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly loginUrl: string;

  constructor(private http: HttpClient) {
    this.loginUrl = 'http://localhost:3000/user/';
  }

  public login(user: UserRegister): any {
    return this.http.post(this.loginUrl, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Handle errors
  private handleError(error: HttpErrorResponse): any {
    console.error('An error occurred', error);
  }
}
