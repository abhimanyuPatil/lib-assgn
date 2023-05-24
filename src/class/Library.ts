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
    const actualIndex = index - 1;
    const book = this.books.find((_, i) => i === actualIndex);
    this.books.splice(actualIndex, 1);
    console.log(`Borrowed ${book?.name}!`);
    return `Borrowed ${book?.name}!`;
  }
}
