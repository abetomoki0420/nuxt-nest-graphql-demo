import { Module } from "@nestjs/common"
import { AuthorsResolver } from "./resolver";
import { AuthorService } from "./services/author.service";
import { PostService } from "./services/post.service";

@Module({
  providers: [
    AuthorService,
    AuthorsResolver,
    PostService
  ]
})
export class AuthorModule {}