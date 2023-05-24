/// <reference types="node" />
import { UUID } from "crypto";
export declare class Book {
    name: string;
    author: string;
    id: UUID;
    constructor(name: string, author: string);
}
