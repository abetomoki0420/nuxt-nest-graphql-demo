import { Injectable} from "@nestjs/common"
import { Post } from "../models/post.model";

@Injectable()
export class PostService {
  private readonly posts: Post[] = [
    {
      id: 1,
      authorId: 1,
      title: "foo",
      votes: 100
    },
    {
      id: 2,
      authorId: 1,
      title: "bar",
      votes: 200
    },
    {
      id: 3,
      authorId: 2,
      title: "baz",
      votes: 300
    },
  ];

  findAll({ authorId }: { authorId: number }): Post[] {
    return this.posts.filter( post => post.authorId === authorId )
  }
}