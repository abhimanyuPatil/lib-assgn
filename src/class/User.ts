import { Books } from "../interfaces";

export class User {
  private static instance: User;
  borrowedBooks: Books[] = [];
  constructor() {
    if (User.instance) {
      return User.instance;
    }
    User.instance = this;
  }

  static getInstance(): User {
    return User.instance;
  }

  addBook(book: Books) {
    this.borrowedBooks.push(book);
  }
}
