export interface ILibrary {
  name: string;
  books: Books[];
  getBooks(): Books[];
  borrowBook(index: number): string;
}

export type Books = {
  name: string;
  author: string;
};

export type LibraryName = "A" | "B";
