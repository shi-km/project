import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  @Input() quotes: Quote[];
  @Output() addQuote = new EventEmitter<Quote>();
  newQuote = new Quote("", "", new Date, "", 0, 0);

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
