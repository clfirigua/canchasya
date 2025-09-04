import { ObjectId } from 'mongodb';
import { BaseEntity } from 'src/shared/domain/base.entity';

export class Customer extends BaseEntity {
    name: string;
    phone: string;
    address: string;
    coordinates: { lat: number; lng: number };
    userId: ObjectId;
    logoUrl: string;
    isActive: boolean;
}