import { CustomerRepository } from "src/customers/domain/customer.respository";
import { UserDTO } from "../dto/user.dto";
import { UserRepository } from "src/users/domain/user.repository";

export class CreateUserUseCase {
    constructor(private readonly repository:UserRepository) {}

    execute(data: UserDTO) {
        return this.repository.save(data as any);
    }
}