import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsxService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http
      .get('assets/data/asx.json')
      .pipe(
        tap(_ => of('fetched heroes')),
        catchError(error => of(error))
      );
  }
}
