// customers/aplication/use-cases/register-customer-account.usecase.ts
import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from 'src/users/aplication/use-case/create.user.case';
import { UserDTO } from 'src/users/aplication/dto/user.dto';
import { CustomerDTO } from '../dto/customer.dto';
import { UserRepository } from 'src/users/domain/user.repository';
import { CreateCustomerUseCase } from './create-customer.use.case';
import { CreateCustomerWithUserDTO } from 'src/customers/domain/customer.entity';



@Injectable()
export class RegisterCustomerAccountUseCase {
  constructor(
    private readonly createUser: CreateUserUseCase,
    private readonly createCustomer: CreateCustomerUseCase,
    private readonly userRepo: UserRepository, // para compensación
  ) {}

  // TODO: mejorar logica de creacion
  async execute(input: CreateCustomerWithUserDTO) {
    const { user, customer } = input;
    const createdUser = await this.createUser.execute(user);
    try {
      const createdCustomer = await this.createCustomer.execute({
        ...customer,
        userId: (createdUser as any)._id,
      } as CustomerDTO);

      return { user: createdUser, customer: createdCustomer };
    } catch (err) {
      try {
        await (this.userRepo as any).delete((createdUser as any)._id.toString());
      } catch {
        console.error("Error al crear el customer")
      }
      throw err;
    }
  }
}
