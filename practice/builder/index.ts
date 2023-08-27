import { PostEntity, UserEntity } from "./builder";

const newUser = new UserEntity.Builder()
  .name("hong")
  .age(-1)
  .marketing(true)
  .build();

const newPost = new PostEntity.Builder()
  .title("hihi")
  .content("good!")
  .author("hong")
  .build();

console.log(newPost);
