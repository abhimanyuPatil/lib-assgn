import { Books, ILibrary } from "../interfaces";

export class Library implements ILibrary {
  books: Books[];
  name: string;
  constructor(books: Books[], name: string) {
    this.books = books;
    this.name = name;
  }

  getBooks(): Books[] {
    return this.books;
  }

  borrowBook(index: number): string {
    this.books.splice(index);
    console.log("Borrowed");
    return "Borrowed!";
  }
}
