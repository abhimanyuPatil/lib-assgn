import { UUID, randomUUID } from "crypto";

export class Book {
  name: string;
  author: string;
  id: UUID;
  constructor(name: string, author: string) {
    this.name = name;
    this.author = author;
    this.id = randomUUID();
  }
}
