import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../types/Book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  ngOnInit(): void {
    
  }
  isInCard: boolean= false;

  constructor(private cartService: CartService ){
      
  }
  

  @Input() book: Book ={} as Book;// from Parent to child

  

  
  addToCard() {
    this.isInCard= true;
    this.cartService.add(this.book);
    
  }

  removeFromCard(){
    this.isInCard= false;
    this.cartService.delete(this.book);
  }
  

}
