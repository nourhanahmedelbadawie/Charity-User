

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
export class GetStaticDataService {

  configUrl = 'http://178.62.19.101:8888/index.php/api';


  constructor(private http: HttpClient) { }

  // get Home data
  getHomeData(): Observable<any> {
      return this.http.get<any>(`${this.configUrl}/getHomescreen/`, httpOptions)    
    .pipe(
      catchError(this.handleError)
    );
  }

    // get Doc data
    getDocData(): Observable<any> {
      return this.http.get<any>(`${this.configUrl}/documents/all_documents/`, httpOptions)    
    .pipe(
      catchError(this.handleError)
    );
  }

    // get Achievemnt data
    getAchcData(): Observable<any> {
      return this.http.get<any>(`${this.configUrl}/get_all_achievements`, httpOptions)    
    .pipe(
      catchError(this.handleError)
    );
    }
    getOneAchData(id): Observable<any> {
      return this.http.get<any>(`${this.configUrl}/achievements/${id}`, httpOptions)    
    .pipe(
      catchError(this.handleError)
    );

  }
    // get About  data

  

  getAboutData(): Observable<any> {
    return this.http.get<any>(`${this.configUrl}/getAboutUsMain`, httpOptions)    
  .pipe(
    catchError(this.handleError)
  );

}


// get Partner Data 

getPartnerData(): Observable<any> {
  return this.http.get<any>(`${this.configUrl}/dashboard/static_partners/`, httpOptions)    
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
