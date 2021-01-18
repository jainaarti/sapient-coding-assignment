import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'https://api.spaceXdata.com/v3/launches?limit=100';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {

  constructor(private http: HttpClient) { }

  getMissions(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getMissionsById(name: string, value: string): Observable<any> {
    return this.http.get(endpoint + '&' + name + '=' + value).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
