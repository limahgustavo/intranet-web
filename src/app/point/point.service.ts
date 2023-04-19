import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PointService {
  readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/point';
  }

  public addPoint(user: number): any {
    return this.http.post(this.url, {userId:user})
      .pipe(
        catchError(this.handleError)
      );
  }

  public getPoints(user: number, startDate: string, endDate: string): any {
    const fullUrl = `${this.url}/${user}?startDate=${startDate}&endDate=${endDate}`
    return this.http.get(fullUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getPointsByRegister(register: string): any {
    const fullUrl = `${this.url}/register/${register}`
    return this.http.get(fullUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Handle errors
  private handleError(error: HttpErrorResponse): any {
    console.error('An error occurred', error);
  }
}
