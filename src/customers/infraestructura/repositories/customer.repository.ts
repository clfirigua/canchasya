import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerDocument } from './schema/customer.schema';
import { BaseRepositoryMongo } from 'src/shared/infrastructure/base.repository.mongo';

@Injectable()
export class CustomerRepositoryMongo extends BaseRepositoryMongo<CustomerDocument> {
  constructor(@InjectModel('Customer') model: Model<CustomerDocument>) {
    super(model);
  }

  // Métodos específicos de Customer (si los necesitas)
  async findByUserId(userId: string): Promise<CustomerDocument | null> {
    return this.model.findOne({ userId }).exec();
  }
}
