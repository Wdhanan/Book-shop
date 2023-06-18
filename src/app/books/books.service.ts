import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] =[
    {
      name: 'Pragmatic Programmer' ,
      author:'David Thomas' ,
      image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
      amount: 9.99
    },
    {
      name:'Pragmatic Programmer' ,
      author:'david thomas',
      image:  'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
      amount: 9.99
    },
    {
      name:'Pragmatic Programmer' ,
      author:'david thomas',
      image:  'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
      amount: 9.99
    } ,
    {
      name:'Pragmatic Programmer' ,
      author:'david thomas',
      image:  'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
      amount: 9.99
    }
    
      ];

  constructor() { }


  getBooks(): Book[]{

    

        return this.books;

  }
}
