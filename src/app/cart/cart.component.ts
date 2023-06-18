import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books: Book[]= [];


  constructor(private cartService: CartService){
    
   this.books= this.cartService.get();
  }
  ngOnInit(): void {
    
  }

  getCart(): Book[]{
    return this.cartService.get();
  }

}
