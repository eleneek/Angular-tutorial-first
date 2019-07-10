import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  currencyConverter;
  currencies;
  Observer;
  fromCurrency = 'From';
  toCurrency = 'To';

  constructor(
    private formBuilder: FormBuilder,
    private converterService: ConverterService,
    ) {
    this.currencyConverter = this.formBuilder.group({
      firstRate: ['',  Validators.min(1)],
      secondRate: ['', Validators.min(1)]
    });
    this.currencies = this.converterService.currencies;
    this.Observer = this.converterService.Observer;
   }

  ngOnInit() {
  }

  setfromCurrency(value) {
    this.converterService.setfromCurrency(value);
    this.fromCurrency = value;
  }

  settoCurrency(value) {
    this.converterService.settoCurrency(value);
    this.toCurrency = value;
  }

  get values() {
    return this.currencyConverter.controls;
  }


  get input() {
    return this.values.firstRate;
  }
  get outPut() {
    return this.values.secondRate;
  }

  getInput() {
    return this.outPut.value / this.converterService.rate;
  }

  getOutput() {
    return this.converterService.rate * this.input.value;
  }
}
