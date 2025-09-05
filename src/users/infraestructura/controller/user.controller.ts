import { Body, Controller, Post } from "@nestjs/common";
import { UserDTO } from "src/users/aplication/dto/user.dto";
import { CreateUserUseCase } from "src/users/aplication/use-case/create.user.case";


@Controller('users')
export class UserController {
  constructor(private readonly user: CreateUserUseCase) {}

  @Post()
  async crear(@Body() userBody: UserDTO) {
    return this.user.execute(userBody);
  }
}
