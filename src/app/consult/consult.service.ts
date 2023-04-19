import {catchError} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TlconsultServiceService
{
  readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/point';
  }
  public getPointConsult(register: string): any {
    const fullUrl = `${this.url}/${register}`
    return this.http.get(fullUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse): any {
    console.error('An error occurred', error);
  }
}




