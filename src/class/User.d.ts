import { Books } from "../interfaces";
export declare class User {
    private static instance;
    borrowedBooks: Books[];
    constructor();
    static getInstance(): User;
    addBook(book: Books): void;
}
