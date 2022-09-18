
import { ResolveField, Resolver, Args, Int, Query, Parent} from "@nestjs/graphql";
import { Author } from "./models/author.model";
import { Post } from "./models/post.model";
import { AuthorService } from "./services/author.service";
import { PostService } from "./services/post.service";

@Resolver( of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorService,
    private postsService: PostService
  ){}

  @Query( returns => Author, { name: "author"} )
  author(@Args("id", { type: () => Int }) id: number){
    return this.authorsService.findOneById(id)
  }

  @ResolveField( "posts", returns => [Post])
  async posts(@Parent() author: Author){
    const { id } = author;
    return this.postsService.findAll( { authorId: id })
  }
}