import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const requestOptions = {
  headers: new HttpHeaders({
    ContentType: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EndOfDayService {
  constructor(private httpClient: HttpClient) {}

  getEndOfDay(
    date: string,
    symbols: string[],
    exchange: string
  ): Observable<any> {
    return this.httpClient.get<any>(
      environment.api_url +
        environment.endOfDay_endPoint +
        '/' +
        date +
        '?access_key=' +
        environment.access_key +
        '&symbols=' +
        symbols.join() +
        '&exchange=' +
        exchange,
      requestOptions
    );
  }
}
