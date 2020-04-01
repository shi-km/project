import { Component, OnInit, OnChanges } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './Quotes.component.html',
  styleUrls: ['./Quotes.component.css']
})
export class QuotesComponent implements OnInit, OnChanges {
  
  idx:number;

  quotes: Quote[] = [
    new Quote("Cricket civilises people and creates good gentlemen. I want everyone to play cricket in Zimbabwe; I want ours to be a nation of gentlemen.", 'Robert Mugabe', new Date('2020, 03, 30'), 'john', 0, 0),
    new Quote("Live as if you were to die tomorrow. Learn as if you were to live forever.", 'Mahatma Gandhi', new Date('2020, 31, 03'), 'George', 0, 0),
    new Quote("Whatever you are, be a good one.", 'Abraham Lincoln', new Date('2020, 03, 1'), 'George', 0, 0),
    new Quote("My Best Friend is a person who will give me a book I have not read.", 'Abraham Lincoln', new Date('2020, 29, 03'), 'George', 0, 0)

  ];

  

  addNewQuote(quote) {
    if (quote.createdBy === '' || quote.author === '' || quote.quote === ''){
      alert('all fields are required!')
    }else{
    this.quotes.push(quote);
  }
  }

  upVote(idx: number) {
    this.quotes[idx].upVotes += 1;
  }

  downVote(idx: number) {
    this.quotes[idx].downVotes += 1;

  }

  bestQuote() {
    let upVoteArr: number[] = [];
    for (let i of this.quotes) {
      upVoteArr.push(i.upVotes);
    }
    let maxVote = Math.max(...upVoteArr);
    let highestVotedQuote = this.quotes.find(quote => quote.upVotes === maxVote);
    if(highestVotedQuote.upVotes){
    return highestVotedQuote.quote;
    }
  }

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    
  }

}
