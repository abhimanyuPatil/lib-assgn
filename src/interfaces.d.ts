/// <reference types="node" />
import { UUID } from "crypto";
export interface ILibrary {
    name: string;
    books: Books[];
    getBooks(): Books[];
    borrowBook(index: number): string;
}
export type Books = {
    name: string;
    author: string;
    id: UUID;
};
export type LibraryName = "A" | "B";
