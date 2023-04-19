import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly loginUrl: string;

  constructor(private http: HttpClient) {
    this.loginUrl = 'http://localhost:3000/user/login';
  }

  public login(user: User): any {
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

