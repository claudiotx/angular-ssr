import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { DocModel } from './docs/doc.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  public errorBlueprint = {
    error: '500',
    msg: 'Something went wrong'
  };

  constructor(private httpClient: HttpClient) { }

  getDocs(): Observable<any> {
    const completeApiUrl = `${this.apiUrl}/docs/`;
    return this.httpClient.get<[any]>(completeApiUrl,
      {})
      .pipe(
        map((res: any) => {
          const modelResults = res.map((item: any) => {
            return new DocModel(
              item._id,
              item.title
            );
          });
          return modelResults;
        })
      );
  }
}
