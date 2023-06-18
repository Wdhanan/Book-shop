import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookComponent } from '../book/book.component';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [
    CommonModule
  ],
  providers: [BooksService],
  exports:[BooksComponent],
})
export class BooksModule { }
