import { Component, OnInit, OnChanges } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit, OnChanges {
  
  idx:number;

  quotes: Quote[] = [
    new Quote("Don't live to make your presence noticed, live to make your absence felt", 'Bob Marley', new Date('2019, 02, 12'), 'john', 0, 0),
    new Quote('Do not gain the world and lose your soul, wisdom is better than silver or gold...', 'Bob Marley', new Date('2019, 03, 12'), 'john', 0, 0),
    new Quote("And I ask why am I black, they say I was born in sin, and shamed inequity. One of the main songs we used to sing in church makes me sick, 'love wash me and I shall be whiter than snow.", 'Peter Tosh', new Date('2019, 09, 12'), 'john', 0, 0),
    new Quote("I freed a thousand slaves I could have freed a thousand more if only they knew they were slaves.", 'Harriet Tubman', new Date('2019, 10, 12'), 'john', 0, 0)

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
