import { Body, Controller, Post, Put } from "@nestjs/common";
import { UpdateUserDto } from "src/users/aplication/dto/update.user.dto";
import { UserDTO } from "src/users/aplication/dto/user.dto";
import { CreateUserUseCase } from "src/users/aplication/use-case/create.user.case";
import { UpdateUserCase, UpdateUserCaseinterface } from "src/users/aplication/use-case/update.user.case";


@Controller('users')
export class UserController {
  constructor(private readonly user: CreateUserUseCase, private updateUser: UpdateUserCase) {}

  @Post()
  async crear(@Body() userBody: UserDTO) {
    return this.user.execute(userBody);
  }
  
  @Put()
  async update(@Body() userBody: UpdateUserDto) {
    return this.updateUser.execute(userBody);
  }
}
