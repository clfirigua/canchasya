import { UserDTO } from "../dto/user.dto";
import { UserRepository } from "src/users/domain/user.repository";
import { ValidateUniqueEmail } from "./validateUniqueEmail";
import { ConflictException } from "@nestjs/common";
import { messagesUsers } from "src/config/responses/response.users";

export class CreateUserUseCase {
    private validateUniqueEmail:ValidateUniqueEmail
    constructor(private readonly repository:UserRepository) {
        this.validateUniqueEmail = new ValidateUniqueEmail(this.repository)
    }

    async execute(user: UserDTO) {
        const existEmail = await this.validateUniqueEmail.execute(user.email)
        if(existEmail)  throw new ConflictException(messagesUsers.validateUniqueEmail(user.email));
        return this.repository.save(user as any);
    }
}