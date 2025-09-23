import { ObjectId } from 'mongodb';
import { BaseEntity } from 'src/shared/domain/base.entity';
import { UserDTO } from 'src/users/aplication/dto/user.dto';
import { CustomerDTO } from '../aplication/dto/customer.dto';

export class Customer extends BaseEntity {
    name: string;
    phone: string;
    address: string;
    coordinates: { lat: number; lng: number };
    userId: ObjectId;
    logoUrl: string;
    isActive: boolean;
}


export type CreateCustomerWithUserDTO = {
  user: UserDTO;
  customer: Omit<CustomerDTO, 'userId'>;
};