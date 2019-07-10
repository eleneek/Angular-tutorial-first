import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './currencies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  currencies;
  fromCurrency;
  Observer;
  rate;
  toCurrency;

  constructor(
    private httpClient: HttpClient
    ) {
    this.currencies = data;
    this.Observer = new Observable(this.getRate);
   }

   setfromCurrency(value) {
    this.fromCurrency = value;
    if (this.toCurrency) {
      this.getRate();
    }
   }

   settoCurrency(value) {
     this.toCurrency = value;
     if (this.fromCurrency) {
      this.getRate();
    }
   }

   getRate() {
    const url = `https://api.exchangeratesapi.io/latest?base=${this.fromCurrency}&symbols=${this.toCurrency}`;

    this.httpClient
    .get(url)
    .subscribe(value => this.setRate(value));
   }

   setRate(value) {
    this.rate = value.rates[this.toCurrency];
  }
}
