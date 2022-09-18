import { Injectable} from "@nestjs/common"
import { Author } from "../models/author.model";

@Injectable()
export class AuthorService {
  private readonly authors: Author[] = [
    {
      id: 1,
      firstName: "abc",
      lastName: "def",
      posts: []
    },
    {
      id: 2,
      firstName: "ghi",
      lastName: "jkl",
      posts: []
    }
  ];

  findAll(): Author[] {
    return this.authors
  }

  findOneById(id: number): Author {
    return this.authors.find( author => author.id === id)
  }
}