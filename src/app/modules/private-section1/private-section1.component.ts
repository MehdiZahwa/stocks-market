import { Component, OnInit } from '@angular/core';
import { EndOfDay } from 'src/app/models/end-of-day';
import { Ticker } from 'src/app/models/ticker';
import { EndOfDayService } from 'src/app/services/end-of-day.service';
import { TickersService } from 'src/app/services/tickers.service';

@Component({
  selector: 'app-private-section1',
  templateUrl: './private-section1.component.html',
  styleUrls: ['./private-section1.component.scss'],
})
export class PrivateSection1Component implements OnInit {
  date = '2020-01-03';
  symbols = ['GOOGL', 'MSFT', 'AMZN'];
  exchange = 'XNAS';
  eod_subscription;
  tickers_subscription;
  ticker_result: Ticker;
  eod_result: EndOfDay;

  constructor(
    private endOfDay_api: EndOfDayService,
    private tickers_api: TickersService
  ) {}

  ngOnInit(): void {
    this.getEndOfDay();
  }

  getEndOfDay(
    date = this.date,
    symbols = this.symbols,
    exchange = this.exchange
  ) {
    this.eod_subscription = this.endOfDay_api
      .getEndOfDay(date, symbols, exchange)
      .subscribe((value) => {
        this.eod_result = value;
        let indice = 0;

        this.eod_result.data.forEach((item) => {
          this.tickers_subscription = this.tickers_api
            .getTickerBySymbol(item.symbol)
            .subscribe((ticker_result) => {
              this.eod_result.data[indice].name = ticker_result.name;
              this.eod_result.data[indice].market =
                ticker_result.stock_exchange.acronym;
              indice++;
            });
        });
      });
  }

  getTickerBySymbol(symbol: string): any {
    let result;
    this.tickers_subscription = this.tickers_api
      .getTickerBySymbol(symbol)
      .subscribe((value) => {
        result = value;
        console.log(result);
      });
    return result;
  }
}
