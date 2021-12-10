import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'http://137.184.108.244:8081/index.php/api';


  constructor(private http: HttpClient) { }
  PostDoner(hero: any): Observable<any> {
      return this.http.post<any>(`${this.configUrl}/members/addDonor`, hero, httpOptions)    
    .pipe(
      catchError(this.handleError)
    );
  }
  PostVolunteer(hero: any): Observable<any> {
    return this.http.post<any>(`${this.configUrl}/members/addVolunteer`, hero, httpOptions)    
  .pipe(
    catchError(this.handleError)
  );
}
subscribe(hero: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}/subscribe`, hero, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}


contactUS(hero: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}/contact/`, hero, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
downloadDocument(hero): Observable<any> {
  console.log(hero)
  return this.http.post<any>(`${this.configUrl}/documents/download_doc/`, hero, httpOptions)    
  .pipe(
    catchError(this.handleError)
  );
}
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
