import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'Be yourself,everyone else is already taken.','Oscar Wilde',new Date(2020,3,14)),
    new Quote(2,'In three words I can sum up everything Ive learned about life: it goes on.',' Robert Frost',new Date(2019,6,9)),
    new Quote(3,'I am so clever that sometimes I dont understand a single word of what I am saying.','Oscar Wilde',new Date(2022,1,12)),
    new Quote(4,'Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring.','Marilyn Monroe',new Date(2019,0,18)),
    new Quote(5,'If you dont stand for something you will fall for anything.”','Gordon A.Eadie',new Date(2019,0,18)),
    new Quote(6,'We read to know were not alone.','William Nicholson',new Date(2019,2,14)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  // completeQuote(isComplete, index){
  //   if (isComplete) {
  //     this.quotes.splice(index,1);
  //   }
  // }
  constructor() { }

  ngOnInit() {
  }

}
