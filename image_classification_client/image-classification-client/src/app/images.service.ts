import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  
  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:3000/api/classify';

  getPrediction(path : string) : Observable<any> {
    const lastSlash = path.lastIndexOf('/');;
    const pathToSend = path.substring(lastSlash);
    const url = `${this.userUrl}?image_name=${pathToSend}`;
    return this.http.get<string>(url).pipe(
      catchError(this.handleError<string>(`getPrediction path=${path}`))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
