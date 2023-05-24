import { Books, ILibrary } from "../interfaces";
export declare class Library implements ILibrary {
    books: Books[];
    name: string;
    constructor(books: Books[], name: string);
    getBooks(): Books[];
    borrowBook(index: number): string;
}
