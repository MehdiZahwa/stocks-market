import { Component, OnInit } from '@angular/core';
import { EndOfDayService } from 'src/app/services/end-of-day.service';

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
  jsonResult = '';

  constructor(private endOfDay: EndOfDayService) {}

  ngOnInit(): void {
    this.getEndOfDay();
  }

  getEndOfDay(
    date = this.date,
    symbols = this.symbols,
    exchange = this.exchange
  ) {
    this.eod_subscription = this.endOfDay
      .getEndOfDay(date, symbols, exchange)
      .subscribe((value) => {
        console.log(value);
        this.jsonResult = value;
      });
  }
}
