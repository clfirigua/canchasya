// customers/aplication/dto/create-customer-with-user.dto.ts
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserDTO } from 'src/users/aplication/dto/user.dto';
import { CustomerDTO } from './customer.dto';

export class CreateCustomerWithUserDTO {
  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  @ValidateNested()
  @Type(() => CustomerDTO)
  customer: Omit<CustomerDTO, 'userId'>; 
}
