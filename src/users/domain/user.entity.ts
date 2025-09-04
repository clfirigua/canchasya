import { BaseEntity } from 'src/shared/domain/base.entity';

export class UserEntity extends BaseEntity {
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    roles: string[];
    lastLogin: Date;
    profilePictureUrl: string;
}