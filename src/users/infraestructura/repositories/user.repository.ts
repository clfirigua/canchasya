import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryMongo } from 'src/shared/infrastructure/base.repository.mongo';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UserRepositoryMongo extends BaseRepositoryMongo<UserDocument> {
  constructor(@InjectModel('User') model: Model<UserDocument>) {
    super(model);
  }


}
