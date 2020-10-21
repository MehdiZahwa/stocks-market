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
export class TickersService {
  constructor(private httpClient: HttpClient) {}

  getTickerBySymbol(symbol: string): Observable<any> {
    return this.httpClient.get<any>(
      environment.api_url +
        environment.tickers_endPoint +
        '/' +
        symbol +
        '?access_key=' +
        environment.access_key,
      requestOptions
    );
  }
}
