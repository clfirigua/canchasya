import { BaseEntity } from 'src/shared/domain/base.entity';
import { ObjectId } from 'mongodb';

export class UserEntity extends BaseEntity {
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    roles: ObjectId;
    lastLogin: Date;
    profilePictureUrl: string;
    idCustomer?: ObjectId;
}