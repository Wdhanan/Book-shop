import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] =[];
  constructor() { }

  add(book: Book){
    console.log(book);
    this.cart.push(book);// Add a book to our Array
  }

  get(): Book[]{
    return this.cart;
  }
  delete(book: Book){
    const index = this.cart.indexOf(book);
if (index > -1) { // only splice array when item is found
  this.cart.splice(index, 1); // 2nd parameter means remove one item only
}
    
  }
}
