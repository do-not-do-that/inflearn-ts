import { UserEntity } from "./builder";

const newUser = new UserEntity.Builder()
  .name("hong")
  .age(-1)
  .marketing(true)
  .build();

console.log(newUser);
